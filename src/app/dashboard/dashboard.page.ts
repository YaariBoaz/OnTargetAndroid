import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import {IonRouterOutlet, IonSlides, ModalController, Platform} from '@ionic/angular';
import { Router } from '@angular/router';
import { InitService } from '../shared/services/init.service';
import { BleService } from '../shared/services/ble.service';
import { UserService } from '../shared/services/user.service';
import { NetworkService } from '../shared/services/network.service';
import { Tab1Service } from './dashboard.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ApiService } from '../shared/services/api.service';
import { WizardService } from '../shared/authentication/signup-wizard/wizard.service';
import { MatDialog } from '@angular/material/dialog';
import { ShootingService } from '../shared/services/shooting.service';
import { PurchaseService } from '../shared/services/purchase.service';
import {StorageService} from '../shared/services/storage.service';
import {ChartConfiguration, ChartData, ChartType, RadialChartOptions} from 'chart.js';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('slider', { static: true }) private slider: IonSlides;

    mySubscription: any = null;
    public radarChartOptions: RadialChartOptions = {
        responsive: true,
        scale:{
            gridLines:{
                color:'white',
                drawOnChartArea:false,
                offsetGridLines:false,
                drawTicks:false,
                drawBorder:true,
                tickMarkLength:100,
            },
            ticks:{
                display:false,
                maxTicksLimit:1,
                beginAtZero:true,
                max:100
            },
            pointLabels:{
                fontColor:'white',
                fontSize:14,
                fontFamily:'Bruno Ace SC'
             }
        },
        scales:{
            gridLines:{
                drawTicks:false,
                drawOnChartArea:false
            },
        },
        plugins:{
            tooltip:{
                enabled:false
            },
            legend: {
                display: false
            }
        },
        elements:{
            point:{
                radius:0
            }
        },
        legend:{
            display:false
        }

    };
    public radarChartLabels: string[] = ['Training Time', 'Hits', 'Miss', '1st Bullet'];
    // @ts-ignore
    public radarChartDatasets: ChartData<'radar'>= [
        { data: [90, 88, 40, 83], label: 'Series A',backgroundColor: '#fce651',borderColor:'white',borderWidth:1 },
    ];

    public slideOpts = {
        initialSlide: 0,
        speed: 400
    };
    constructor(private platform: Platform,
                private networkService: NetworkService,
                private router: Router,
                private tab1Service: Tab1Service,
                private userService: UserService,
                private zone: NgZone,
                private shootingService: ShootingService,
                private ble: BleService,
                public dialog: MatDialog,
                private cd: ChangeDetectorRef,
                private renderer: Renderer2,
                private initService: InitService,
                private apiService: ApiService,
                private wizardService: WizardService,
                public modalController: ModalController,
                private srvPurchase: PurchaseService
                // private store: InAppPurchase2
    ) {
        this.wizardService.notifyUserWasRegisterd.subscribe(data => {
            if (data) {

                this.initDashboard();
                const content: any = document.querySelector('mat-tab-header');
                if (content) {
                    content.style.display = 'flex';
                }
            }
        });
        this.wizardService.afterSubscriptionDone.subscribe((data) => {
            if (data) {
                // this.getSubscription();
                this.mySubscription = data;
            }
        })
    }




    getSubscription() {
        // this.apiService.getSubscription(this.profile.id).subscribe((resp) => {
        //     if (resp) {
        //         this.mySubscription = resp;
        //         this.storageService.setItem('purchase',JSON.stringify(resp));
        //     }
        //     console.log('what is getSubscription resp', resp);
        // }, err => {
        //
        // });
    }

    ngOnInit(): void {
        this.initService.notifySignupFinished.subscribe((data) => {
            if (data) {
                this.initService.isLoading.next(false);
            }
        });

        this.initService.newDashboardData.subscribe(data => {
            if (data) {
                this.initDashboard();
            }
        });
        // this.dialog.open(PaymentComponent, {
        //     height: '100%',
        //     width: '100%',
        // });
    }

    public async ionSlideDidChange(): Promise<void> {
        const index = await this.slider.getActiveIndex();

    }


    initDashboard() {
        let userId = this.userService.getUserId();
        if (!userId) {
            userId = localStorage.getItem('userId');
        }

        // this.apiService.getDashboardData(userId).subscribe(data => {
        //     console.log('DASHBOARD DATA: ',data);
        //     this.data = data;
        //     this.storageService.setItem('homeData', data);
        //     this.showUi = true;
        //     this.profile = this.userService.getUser();
        //     console.log('this profile', this.userService.getUser().id);
        //     this.getSubscription();
        //     this.handleOfflineScenario();
        //     this.initService.isLoading.next(false);
        //     this.initService.isLoading.next(false);
        //     this.cd.detectChanges();
        // });
    }

    onDiscconectTarget() {
        this.initService.distory();
    }

    onLogout() {
        localStorage.setItem('userId', null);
        localStorage.setItem('isLoggedIn', null);
        localStorage.setItem('profileData', null);
        localStorage.setItem('homeData', null);
        localStorage.setItem('sightList', null);
        localStorage.setItem('gunList', null);
    }
    ngOnDestroy() {

    }

    ngAfterViewInit(): void {
    }

    onActivityClicked() {

    }
}
