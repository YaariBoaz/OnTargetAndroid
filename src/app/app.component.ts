import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InitService } from './shared/services/init.service';
import { LoadingController } from '@ionic/angular';
import { BleService } from './shared/services/ble.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { PopupsService } from './shared/services/popups.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { MatDialog } from '@angular/material/dialog';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';
import { WizardService } from './shared/authentication/signup-wizard/wizard.service';
import 'capacitor-plugin-app-tracking-transparency'; // only if you want web support
import {
    AppTrackingTransparency,
    AppTrackingStatusResponse,
} from 'capacitor-plugin-app-tracking-transparency';
const ADL_IAP_KEY = 'adl';
const ADL_IAP_KEY_2_SESSIONS = 'twoSessionSub';
const ADL_IAP_KEY_6_SESSIONS = 'sixSessions';

const ADL_IAP_KEY_md = 'auto_renew';
const ADL_IAP_KEY_2_SESSIONS_md = 'two_session_sub';
const ADL_IAP_KEY_6_SESSIONS_md = 'six_sessions';

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


    constructor(
        private platform: Platform,
        private initService: InitService,
        private store: InAppPurchase2,
        private nativePageTransitions: NativePageTransitions,
        public ble: BleService,
        private wizardService: WizardService,
        private popupsService: PopupsService,
        public loadingController: LoadingController,
        private screenOrientation: ScreenOrientation,
        public dialog: MatDialog
    ) {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.initService.getSights();
        this.initService.getSightsZeroing();
        this.initService.getWeapons();
        this.initService.getCalibers();
        this.platform.ready().then(() => {

            if (this.platform.is('ios')) {


            }

            // SplashScreen.hide().then(r => {
            //     const options: NativeTransitionOptions = {
            //         direction: 'up',
            //         duration: 500,
            //         slowdownfactor: 3,
            //         slidePixels: 20,
            //         iosdelay: 100,
            //         androiddelay: 150,
            //         fixedPixelsTop: 0,
            //         fixedPixelsBottom: 60
            //     };
            //
            //     this.nativePageTransitions.slide(options)
            //         .then(() => {
            //         })
            //         .catch(() => {
            //         });
            // });
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


        // if (this.platform.is("ios")) {
        //     this.store.register({ id: ADL_IAP_KEY, type: this.store.PAID_SUBSCRIPTION });
        //     this.store.register({ id: ADL_IAP_KEY_2_SESSIONS, type: this.store.CONSUMABLE });
        //     this.store.register({ id: ADL_IAP_KEY_6_SESSIONS, type: this.store.CONSUMABLE });
        // } else {
        //     this.store.register({ id: ADL_IAP_KEY_md, type: this.store.PAID_SUBSCRIPTION });
        //     // this.store.register({ id: ADL_IAP_KEY_2_SESSIONS_md, type: this.store.CONSUMABLE });
        //     // this.store.register({ id: ADL_IAP_KEY_6_SESSIONS_md, type: this.store.CONSUMABLE });
        // }


        this.getStatus().then((data) => {

        })
        this.requestPermission().then((data) => {
            console.log(data.status);
        })


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

        const { role, data } = await loading.onDidDismiss();
    }


    ngOnDestroy(): void {

    }

}
