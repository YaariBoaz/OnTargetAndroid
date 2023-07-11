import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardPage } from './dashboard.page';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { ActivityHistoryComponent } from '../shared/activity-history/activity-history.component';
import { SigninModule } from '../shared/authentication/signin/signin.module';
import { WizardModule } from '../shared/authentication/signup-wizard/wizard.module';
import { MatMenuModule } from '@angular/material/menu';
// import { PaymentComponent } from '../shared/components/payment/payment.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NgxChartsModule,
        SharedModule,
        MatIconModule,
        MatMenuModule,
        SigninModule,
        WizardModule,
        ChartsModule

    ],
    providers: [],
    declarations: [DashboardPage, ActivityHistoryComponent,],
    entryComponents: [ActivityHistoryComponent,],
    exports: [
        DashboardPage
    ]
})
export class Tab1PageModule {
}
