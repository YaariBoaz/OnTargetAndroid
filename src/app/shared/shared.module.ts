import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ApiService} from './services/api.service';
import {UserService} from './services/user.service';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Tab3Page} from '../tab3/tab3.page';
import {GunlistComponent} from '../tab3/gunlist/gunlist.component';
import {SightlistComponent} from '../tab3/sightlist/sightlist.component';
import {StorageService} from './services/storage.service';
import {HitNohitService} from './drill/hit-nohit.service';
import {TermsAndConditionComponent} from './components/terms-and-condition/terms-and-condition.component';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
 import {ErrorModalComponent} from './popups/error-modal/error-modal.component';
import {AccessModalComponent} from './popups/access-modal/access-modal.component';
import {NoConnetionErroComponent} from './popups/no-connection/no-connetion-error';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {ShareDialogComponent} from './share-dialog/share-dialog.component';
import {ChallengeListComponent} from './ChooseDrill/List/challenge-list.component';
import {PaymentComponent} from './components/payment/payment.component';
import {ReversePipe} from './pipes/reverse.pipe';
import {MakeItNormalTextPipe} from './pipes/make-it-normal-text.pipe';
import {RouterModule} from '@angular/router';
import {NewTargetDesignComponent} from './components/new-target-design/new-target-design.component';
import {SelectTargetComponent} from './select-target-modal/select-target-component';

@NgModule({
    declarations: [
        Tab3Page,
        NoConnetionErroComponent,
        AccessModalComponent,
        GunlistComponent,
        SightlistComponent,
        TermsAndConditionComponent,
        SelectTargetComponent,
        ErrorModalComponent,
        ShareDialogComponent,
        ChallengeListComponent,
        PaymentComponent,
        ReversePipe,
        MakeItNormalTextPipe,
        NewTargetDesignComponent
    ],

    imports: [
        CommonModule,
        MatMenuModule,
        MatExpansionModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule
    ],
    providers: [HitNohitService, ApiService, UserService, StorageService, ScreenOrientation],
    exports: [
        MaterialModule,
        MatMenuModule,
        MatExpansionModule,
        IonicModule,
        FormsModule,
        MakeItNormalTextPipe,
        ReactiveFormsModule,
        Tab3Page, GunlistComponent, SightlistComponent,
        ErrorModalComponent, AccessModalComponent, ReversePipe,
        SelectTargetComponent, TermsAndConditionComponent, PaymentComponent, NewTargetDesignComponent
    ],


})
export class SharedModule {
}




