import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {InitService} from './shared/services/init.service';
import {LoadingController} from '@ionic/angular';
import {BleService} from './shared/services/ble.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';
import {MatDialog} from '@angular/material/dialog';
import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
import {WizardService} from './shared/authentication/signup-wizard/wizard.service';
import 'capacitor-plugin-app-tracking-transparency'; // only if you want web support
import {
    AppTrackingTransparency,
    AppTrackingStatusResponse,
} from 'capacitor-plugin-app-tracking-transparency';
import {SplashScreen} from '@ionic-native/splash-screen';
import { SafeArea } from 'capacitor-plugin-safe-area';
import {AndroidFullScreen} from '@awesome-cordova-plugins/android-full-screen/ngx';


const ADL_IAP_KEY = 'adl';
const ADL_IAP_KEY_2_SESSIONS = 'twoSessionSub';
const ADL_IAP_KEY_6_SESSIONS = 'sixSessions';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
    private devices;
    splash = true;
    isLoding = false;
    isiOS = false;
    interval: number;
    private gatewayIsConnected: boolean;
    showBluetoothErrorMessage =false;


    constructor(
        private platform: Platform,
        private initService: InitService,
        private store: InAppPurchase2,
        private nativePageTransitions: NativePageTransitions,
        public ble: BleService,
        private wizardService: WizardService,
        public loadingController: LoadingController,
        private screenOrientation: ScreenOrientation,
        public dialog: MatDialog,
        private androidFullScreen: AndroidFullScreen
    ) {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.initService.getSights();
        this.initService.getSightsZeroing();
        // this.initService.getWeapons();
        this.initService.getCalibers();
        this.platform.ready().then(() => {

            this.platform.backButton.subscribeWithPriority(9999, () => {
                document.addEventListener('backbutton', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                }, false);
            });

            if (this.platform.is('ios')) {
                this.isiOS = true;
            }
            window.addEventListener('beforeunload', () => {
                this.initService.distory();
            });

        });
        this.initService.isLoading.subscribe((isLoading: boolean) => {
            this.isLoding = isLoading;
        });

        this.wizardService.isLoading.subscribe((isLoading: boolean) => {
            this.isLoding = isLoading;
        });

        this.androidFullScreen.isImmersiveModeSupported()
            .then(() => console.log('Immersive mode supported'))
            .catch(err => console.log(err));

        this.androidFullScreen.immersiveMode().then()

        SafeArea.getSafeAreaInsets().then(({ insets }) => {
            console.log(insets);
        });

        SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
            console.log(statusBarHeight, 'statusbarHeight');
        });

        this.subscribeToSafeAreaChanged().then()

        // this.store.register({id: ADL_IAP_KEY, type: this.store.PAID_SUBSCRIPTION});
        // this.store.register({id: ADL_IAP_KEY_2_SESSIONS, type: this.store.CONSUMABLE});
        // this.store.register({id: ADL_IAP_KEY_6_SESSIONS, type: this.store.CONSUMABLE});

        // this.getStatus().then((data) =>{
        //
        // })
        // this.requestPermission().then((data)=>{
        //     console.log(data.status);
        // })

     this.findMyGateway()
    }

    public async getStatus(): Promise<AppTrackingStatusResponse> {
        const response = await AppTrackingTransparency.getStatus();
        console.log(response);
        // { status: 'authorized' } for example
        return response;
    }

    public async requestPermission(): Promise<AppTrackingStatusResponse> {
        const response = await AppTrackingTransparency.requestPermission();
        console.log(response);
        // { status: 'authorized' } for example
        this.store.register({id: ADL_IAP_KEY, type: this.store.PAID_SUBSCRIPTION});
        this.store.register({id: ADL_IAP_KEY_2_SESSIONS, type: this.store.CONSUMABLE});
        this.store.register({id: ADL_IAP_KEY_6_SESSIONS, type: this.store.CONSUMABLE});
        return response;

    }

    ngOnInit() {
        setTimeout(() => {
            this.splash = false;
        }, 5000);

        this.ble.notifyDisconnect.subscribe((flag) => {
            if (flag) {

            }
        });
        // this.ble.scan();
    }


    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            spinner: 'bubbles',
            duration: 2000,
            message: 'Unexpected disconnection, Reconnecting to the target',
            translucent: true,
            backdropDismiss: true
        });
        await loading.present();

        const {role, data} = await loading.onDidDismiss();
    }


    ngOnDestroy(): void {

    }

    private findMyGateway() {
       this.interval = setInterval(() =>{
            this.ble.scan().subscribe(data =>{
                if(data){
                    clearInterval(this.interval);
                    this.isLoding = false;
                }});
        },5000)
       this.ble.notifyConnectedToGateway.subscribe(flag =>{
        if (flag){
            this.gatewayIsConnected = true;
            clearInterval(this.interval);
        }
    })
    }

    private async subscribeToSafeAreaChanged() {
        // when safe-area changed
        const eventListener = await SafeArea.addListener('safeAreaChanged', data => {
            const { insets } = data;
            for (const [key, value] of Object.entries(insets)) {
                document.documentElement.style.setProperty(
                    `--safe-area-${key}`,
                    `${value}px`,
                );
            }
        });
        await eventListener.remove();
    }
}
