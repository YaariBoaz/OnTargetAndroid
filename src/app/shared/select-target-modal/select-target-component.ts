import {ChangeDetectorRef, Component, NgZone, OnInit,} from '@angular/core';
import {ShootingService} from '../services/shooting/shooting.service';
import {Router} from '@angular/router';
import {StorageService} from '../services/storage.service';
import {BleService} from '../services/ble.service';
import {HitNohitService} from '../drill/hit-nohit.service';
import {InitService} from '../services/init.service';
import {GatewayService} from '../services/gateway.service';
import {AndroidPermissions} from '@awesome-cordova-plugins/android-permissions/ngx';






@Component({
    selector: 'app-select-target',
    templateUrl: './select-target-component.html',
    styleUrls: ['./select-target.component.scss'],
})
export class SelectTargetComponent implements OnInit {
    BASE_URL_HTTP = '192.168.0.86:8087';
    socket;
    chosenTarget = null;
    myTargets = [];
    targetConnected = false;
    selectedTarget = null;
    primaryTarget: null;
    loading: HTMLIonLoadingElement;
    personalTarget: any;
    isFromWizard = false;
    targetIsConnected = false;
    targetNotSelected = false;
    connectedClicked = false;
    isScanning = false;
    personalChosen = false;
    isPersonalTargetAround = false;
    isConnected: boolean;
    myTargetsForKeepAlive = [];
    isiOS;
    targets = [];
    isGatewayConnected = false;
    selectedTargetName= null;
    component = SelectTargetComponent
     constructor(
        private storageService: StorageService,
        private shootingService: ShootingService,
        private hitNohitService: HitNohitService,
        private bleService: BleService,
        private androidPermissions: AndroidPermissions,
        private ngZone: NgZone,
        private gateWayService: GatewayService,
        private cd: ChangeDetectorRef,
        private zone: NgZone,
        private initService: InitService,
        private router: Router
    ) {
        this.isScanning = !this.bleService.isGatewayConnected;
        if(this.shootingService.isTargetConnected) {
            this.myTargets.push(this.shootingService.selectedTarget);
            this.selectedTargetName = this.shootingService.selectedTarget.name;
        }
    }

    ngOnInit() {
        this.bleService.notifyConnectedToGateway.subscribe(flag => {
            this.isGatewayConnected = flag;
            this.isScanning = !flag
        });
        this.gateWayService.notifyTargetConnectedToGateway.subscribe(device =>{
            if(device){
                this.myTargets.push(device)
                this.cd.detectChanges();
            }
        })
        this.bleService.notifyTargetConnected.subscribe((device)=>{
            if(device){
                this.myTargets.push(device);
                this.cd.detectChanges();
            }
        })
      }

    startTraining() {
        this.hitNohitService.resetDrill();
        this.router.navigateByUrl('choose', {replaceUrl: true}).then() ;
    }

    onBackPressed() {
        this.router.navigateByUrl('home',{ replaceUrl: true });
    }


    reScan() {
        this.isScanning = true;
        this.bleService.scan();
        setTimeout(()=> this.isScanning = false,5000);
    }

    onTargetSelected(target: any) {
        this.myTargets.forEach(t => t.isSelected = false);
        target.isSelected = true;
        this.storageService.setItem('slectedTarget', target);
        this.shootingService.selectedTarget = target;
        this.shootingService.isTargetConnected = true;
        this.selectedTarget = target;
        this.selectedTargetName = target.name;
        this.cd.detectChanges();
        // If its not a gateway we need to connect directly to the target.
        if (target.id) {
            if (this.bleService.isGateway) {
                this.bleService.disconnect().then(data => {
                    this.bleService.isGateway = false;
                    this.bleService.connect(target.uuid);
                    this.bleService.notifyTargetConnected.subscribe(d => {
                        this.isConnected = true;
                        this.targetNotSelected = false;
                        this.cd.detectChanges();
                    });
                });
            } else {
                this.bleService.connect(target.uuid);
                this.bleService.notifyTargetConnected.subscribe(data => {
                    this.isConnected = true;
                    this.targetNotSelected = false;
                    this.cd.detectChanges();
                });
            }

        } else {
            this.isConnected = true;
            this.targetNotSelected = false;
            this.cd.detectChanges();
        }
    }

    onGoToEditDrill() {
        if(this.selectedTarget){
            this.shootingService.chosenTarget = this.selectedTarget;
        }
        if (!this.initService.isGateway) {
            this.targetIsConnected = true;
            this.zone.run(() => {
                // Your router is here
                this.router.navigateByUrl('/activity/choose',{ replaceUrl: true });
            });
        }
        this.router.navigateByUrl('/activity/choose',{ replaceUrl: true });
    }

    setSelectedTarget(item: any) {
        this.targets.forEach(x => x.isSelected = false);
        item.isSelected = true;
    }

    scanForGateway() {
        this.bleService.scan();
    }
}



