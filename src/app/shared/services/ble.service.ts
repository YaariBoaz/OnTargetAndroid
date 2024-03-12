import {Injectable, NgZone} from '@angular/core';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {StorageService} from './storage.service';
import {GatewayService} from './gateway.service';
import {InitService} from './init.service';
import {ShootingService} from './shooting/shooting.service';
import { Dialog } from '@capacitor/dialog';
import {catchError, map} from "rxjs/operators";

const SERVICE_2 = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const SERVICE_2_CHAR = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';
const SERVICE_2_CHAR_WRITE = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';

@Injectable({
    providedIn: 'root'
})
export class BleService {
    msgNumber = 1;
    devices: any[];
    peripheral: any;
    dataFromDevice;
    notifyShotArrived = new BehaviorSubject(0);
    notifyDisconnect = new BehaviorSubject(null);
    notifyConnectedToGateway = new BehaviorSubject(false);
    notifyTargetConnected = new BehaviorSubject(false);
    subscription: Subscription;
    scanFinished = new BehaviorSubject<any>(false);
    currentTargetId: any;
    isConnectedFlag = false;

    isGateway: boolean;
    gatewayTargets: { gateway: any; target: any };
    gateways = [];
    activateReconnectProcessCount = 0;
    isGatewayConnected = false;

    constructor(
        private storage: StorageService,
        public ble: BLE,
        private ngZone: NgZone,
        private shootingService: ShootingService,
        private initService: InitService,
        private gatewayService: GatewayService) {
        this.devices = this.storage.getItem('ble');
        if (!this.devices) {
            this.devices = [];
        }
    }

    // Scan for BLE devices
    scan() {
        this.devices = [];  // clear list
        this.storage.setItem('ble', this.devices);
        return this.ble.startScan([]).pipe(
            map((device) => this.onDeviceDiscovered(device)),
            catchError(this.scanError)
        )
    }

    // When a BLE device is discovered we filter only the known devices.
    onDeviceDiscovered(device) {
        this.ngZone.run(() => {
            if (device.name) {
                console.log('FOUND DEVICE: ' + device.name);
                if (this.isAdlTarget(device)) {
                    if (this.devices.length === 0) {
                        this.devices.push(device);
                        this.notifyTargetConnected.next(device);
                        this.storage.setItem('ble', this.devices);
                    } else if (this.devices.find(o => o.id === device.id) === undefined) {
                        this.devices.push(device);
                        this.storage.setItem('ble', this.devices);
                    }
                } else if (this.isAdlGateway(device)) {
                    this.gateways.push(device.id);
                    this.isGateway = true;
                    this.isGatewayConnected = true;
                    this.initService.isGateway = true;
                    this.notifyConnectedToGateway.next(true)
                    this.connect(device.id);
                }
            }
        });
    }

    // If the connection crashes when it reconnects we reset the stats.
    resetShots() {
        this.gatewayService.initStats();
        const txe = new TextEncoder();
        if (this.peripheral && this.peripheral.id) {
            this.ble.write(this.peripheral.id, SERVICE_2, SERVICE_2_CHAR_WRITE, txe.encode('CLCO\n').buffer).then((prmise) => {
                console.log('From Reset: ' + prmise);
            }).catch(err => {
            });
        }
    }

    // NOT ACTIVE. -this was used when we wanted to let the user refresh the connection.
    resetConnection() {
        const txe = new TextEncoder();
        if (this.peripheral && this.peripheral.id) {
            this.ble.write(this.peripheral.id, SERVICE_2, SERVICE_2_CHAR_WRITE, txe.encode('RSTC\n').buffer).then((prmise) => {
                console.log('reset connection completed');
            }).catch(err => {
            });
        }
    }

    // If location permission is denied, Or Bluetooth is not active you'll end up here
    async scanError(error) {
        await Dialog.alert({
            title: 'Bluetooth Error',
            message: error,
        });
      return error;
    }

    // Sets the target to listen for message from.
    connect(deviceId) {
        console.log('FROM BLE CONNECT: ' , deviceId);
        if(deviceId){
            if (this.gateways.indexOf(deviceId) > -1) {
                this.isGateway = true;
                this.initService.isGateway = true;
            } else {
                this.resetShots();
            }
            this.currentTargetId = deviceId;
            this.ble.connect(deviceId).subscribe(
                (peripheral) => {
                    this.onConnected(peripheral);
                },
                peripheral => {
                    console.log('DEVICE DISCONNECT IT SELF', peripheral);
                    this.activateReconnectProcess();
                }, () => {
                }
            );
        }

    }

    //  Notify comps that a connection has been made.
    onConnected(peripheral: any) {
        this.isConnectedFlag = false;
        if (!this.isGateway) {
            this.resetShots();
        }
        console.log('Connected to ' + peripheral.name + ' ' + peripheral.id);
        this.ngZone.run(() => {
            this.peripheral = peripheral;
        });
        this.handleRead(peripheral.name, peripheral.id, SERVICE_2, SERVICE_2_CHAR);
    }

    //  Notify comps that a connection has been lost.
    onDeviceDisconnected(peripheral) {
    }

    // Register to notifications from the gateway
    handleRead(name, id, service, characteristic) {
        console.log('SUBSCRIBED TO START NOTIFICATION');
        this.subscription = this.ble.startNotification(id, service, characteristic).subscribe((data) => {
            console.log('RECEIVED A MESSAGE');
            const target = this.storage.getItem('slectedTarget');
            const dec = new TextDecoder();
            const enc = new TextEncoder().encode(data);
            const temp = new TextDecoder().decode(enc);
            const buffer = new Uint8Array(data[0]);
            if (this.isGateway) {
                this.parseGatewayMessage(buffer);
            } else {
                if (dec.decode(buffer) === 'Clear') {
                    console.log('Target cleared shots');
                } else {
                    // @ts-ignore
                    const encoder = new TextEncoder();
                    // @ts-ignore
                    const encodedString = encoder.encode(buffer);
                    // tslint:disable-next-line:radix
                    const text = parseInt(dec.decode(encodedString));
                    this.notifyShotArrived.next(text);
                    this.ngZone.run(() => {
                        console.log('Read from: ' + service + ' ' + service + ' has arrived: ' + text);
                    });
                }
            }

        });
    }

    // Parse the messages from the gateway
    parseGatewayMessage(buffer: Uint8Array) {
        const selectedTarget = this.shootingService.chosenTarget;
        const messageFromGateway = String.fromCharCode.apply(null, buffer);
        console.log('MESSAGE ARRIVED: ' + messageFromGateway);

        // Events after target is already connected
        if(selectedTarget){
            console.log('CONNECTED TARGET IS ' + selectedTarget.name);
            this.handleTargetMessages(messageFromGateway,selectedTarget);
        }
        // Events before or after target is connected.
        else{
            console.log('NO SELECTED TARGET IS CHOSEN!!!!!!!!');
            this.handleGatewayMessages(messageFromGateway);
        }
    }

    // Checks if a ble device Is connected.
    isConnected(): Promise<any> {
        return this.ble.isConnected(this.peripheral.id);
    }

    disconnect() {
        return this.ble.disconnect(this.currentTargetId);
    }

    activateReconnectProcess() {
        this.shootingService.isTargetConnected = false;
        this.ble.disconnect(this.currentTargetId).then(() => {
            this.isConnectedFlag = false;
            this.notifyDisconnect.next({isManually: false, status: true});
            console.log('Called Disconnect');
            try {
                this.subscription = this.ble.connect(this.currentTargetId).subscribe(
                    (peripheral) => {
                        this.isConnectedFlag = false;
                        this.onConnected(peripheral);
                    },
                    peripheral => {
                        console.log('Disconnected', 'The peripheral unexpectedly disconnected');
                        if (this.activateReconnectProcessCount < 5) {
                            this.activateReconnectProcessCount++;
                            this.activateReconnectProcess();
                        } else {
                            this.activateReconnectProcessCount = 0;
                        }
                    });
            } catch (e) {
            }
        });
    }

    private isAdlTarget(device: { name: string; }) {
        return device.name.toLowerCase().includes('adl') ||
        device.name.toLowerCase().includes('e64') ||
        device.name.toLowerCase().includes('e64n015') ||
        device.name.toLowerCase().includes('e1n') ||
        device.name.toLowerCase().includes('e1n') ||
        device.name.toLowerCase().includes('eMarn') ||
        device.name.toLowerCase().includes('003') ||
        device.name.toLowerCase().includes('e16') ||
        device.name.toLowerCase().includes('nordic')
    }

    private isAdlGateway(device: { name: string; }) {
        return device.name.toLowerCase().includes('egateway');
    }

    private handleTargetMessages(messageFromGateway: string | string[],selectedTarget: { name: string; }) {
        if (messageFromGateway.indexOf(',B,') > -1) {
            this.gatewayService.processData(messageFromGateway);
        }
        else if (selectedTarget && messageFromGateway.indexOf(',S,') > -1) {
            if(messageFromGateway.indexOf(selectedTarget.name) > -1){
                this.gatewayService.processData(messageFromGateway);
            }
        }
        else if(messageFromGateway.indexOf(',SZ,') > -1){
            this.gatewayService.processData(messageFromGateway);
        }
        else if(messageFromGateway.indexOf('e94a4cc64bd4') > -1){
            this.gatewayService.processData(messageFromGateway);
        }
    }

    private handleGatewayMessages(messageFromGateway: any) {
      if (messageFromGateway.indexOf('Connecting') > -1) {
            this.gatewayTargets = {gateway: this.currentTargetId, target: messageFromGateway.split(' ')[3]};
        }
        else if (messageFromGateway.indexOf('Disconnected') > -1) {
            this.activateReconnectProcess();
        }
    }
}
