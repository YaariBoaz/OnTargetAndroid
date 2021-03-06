import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './shared/authentication/auth-guard.service';
import {NewTargetDesignComponent} from './shared/components/new-target-design/new-target-design.component';
import {Tab1Page} from './tab1/tab1.page';
import {ChooseDrillComponent} from './shared/ChooseDrill/choose-drill.component';
import {ChallengeListComponent} from './shared/ChooseDrill/List/challenge-list.component';
import {Tab2Page} from './tab2/tab2.page';
import {DrillComponent} from './shared/drill/drill.component';
import {SelectTargetComponent} from './shared/select-target-modal/select-target-component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
// ];

const routes: Routes = [
    {
        path: 'home',
        component: Tab1Page,

    },
    {
        path: 'select-target',
        component: SelectTargetComponent,

    },
    {
        path: 'choose',
        component: ChallengeListComponent,

    }, {
        path: 'editDrill',
        component: Tab2Page,

    },{
        path: 'drill',
        component: DrillComponent,

    },
    {path: 'new-target', component: NewTargetDesignComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'subscription',
    loadChildren: () => import('./shared/subscription/subscription.module').then( m => m.SubscriptionPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
