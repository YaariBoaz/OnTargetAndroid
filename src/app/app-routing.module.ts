import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './shared/authentication/auth-guard.service';
import {NewTargetDesignComponent} from './shared/components/new-target-design/new-target-design.component';
import {DashboardPage} from './dashboard/dashboard.page';
import {ChooseDrillComponent} from './shared/ChooseDrill/choose-drill.component';
import {ChallengeListComponent} from './shared/ChooseDrill/List/challenge-list.component';
import {CustomDrillPage} from './custom-drill/custom-drill.page';
import {DrillComponent} from './shared/drill/drill.component';
import {SelectTargetComponent} from './shared/select-target-modal/select-target-component';
import {TabsPage} from './tabs/tabs.page';
import {ProfileComponent} from './profile/profile.component';
import {ProgressComponent} from './progress/progress.component';
import {FeedComponent} from './feed/feed.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
// ];

const routes: Routes = [
    {
        path:'',
        component:TabsPage,
        children:[
            {
            path: 'dashboard',
            component:DashboardPage
            },
            {
                path:'activity',
                children:[
                    {
                        component:SelectTargetComponent,
                        path:''
                    },
                    {
                        component:ChooseDrillComponent,
                        path:'choose'
                    },
                    {
                        component:DrillComponent,
                        path:'drill'
                    }
                ]
            },
            {
                path:'profile',
                component:ProfileComponent
            },
            {
                path:'progress',
                component:ProgressComponent
            },
            {
                path:'feed',
                component:FeedComponent
            },
            {
                path: '',
                component:DashboardPage
            },

        ]

    },

  {
    path: 'subscription',
    loadChildren: () => import('./shared/subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
    {path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
