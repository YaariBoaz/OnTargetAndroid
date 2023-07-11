import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {StorageService} from './shared/services/storage.service';
import {InitService} from './shared/services/init.service';
import {Tab1Service} from './dashboard/dashboard.service';
import {UserService} from './shared/services/user.service';
import {BLE} from '@awesome-cordova-plugins/ble/ngx';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {CdTimerModule} from 'angular-cd-timer';
import {BleService} from './shared/services/ble.service';
import {Crop} from '@ionic-native/crop/ngx';
import {CommonModule} from '@angular/common';
import {GatewayService} from './shared/services/gateway.service';
import {ErrorModalComponent} from './shared/popups/error-modal/error-modal.component';
import {NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';
import {MaterialModule} from './shared/material/material.module';
import {enterAnimation} from './shared/animation/nav-animation';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {NgxCaptureModule} from 'ngx-capture';
import {AndroidPermissions} from '@awesome-cordova-plugins/android-permissions/ngx';
import {HammerModule} from '@angular/platform-browser';
import {ActivityLogComponent} from './shared/activity-log/activity-log.component';
import {Tab1PageModule} from './dashboard/dashboard.module';
import {Tab2PageModule} from './custom-drill/custom-drill.module';
import {PurchaseService} from './shared/services/purchase.service';
import {DrillModule} from './shared/drill/drill.module';
import {ApiService} from './shared/services/api.service';
import {BulletBankService} from './shared/services/bullet-bank.service';
import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
import {AdvanceSettingsComponent} from './custom-drill/advance-settings/advance-settings.component';
import {TabsPage} from './tabs/tabs.page';
import {TabsService} from './tabs/tabs.service';
import {ProfileComponent} from './profile/profile.component';
import {FeedComponent} from './feed/feed.component';


// @ts-ignore
@NgModule({
    declarations: [AppComponent, ActivityLogComponent,AdvanceSettingsComponent,TabsPage,ProfileComponent,FeedComponent],
    entryComponents: [ErrorModalComponent,AdvanceSettingsComponent],
    imports: [
        BrowserModule,
        HammerModule,
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        CdTimerModule,
        FormsModule,
        IonicModule.forRoot({
            navAnimation: enterAnimation
        }),
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgxCaptureModule,
        Tab1PageModule,
        Tab2PageModule,
        DrillModule,
    ],
    providers: [
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        AndroidPermissions,
        InitService,
        ApiService,
        NativePageTransitions,
        StorageService,
        Tab1Service,
        SocialSharing,
        UserService,
        BLE,
        BluetoothSerial,
        GatewayService,
        BleService,
        Crop,
        PurchaseService,
        InAppPurchase2,
        BulletBankService,
        TabsService
    ],
    exports: [MaterialModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}






