import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import {IonSlides, ModalController, Platform} from '@ionic/angular';
import { Router } from '@angular/router';
import { InitService } from '../shared/services/init.service';
import { BleService } from '../shared/services/ble.service';
import { UserService } from '../shared/services/user.service';
import { NetworkService } from '../shared/services/network.service';
import { DashboardService } from './dashboard.service';
import { ApiService } from '../shared/services/api.service';
import { WizardService } from '../shared/authentication/signup-wizard/wizard.service';
import { MatDialog } from '@angular/material/dialog';
import { ShootingService } from '../shared/services/shooting/shooting.service';
import { PurchaseService } from '../shared/services/purchase.service';
import {ChartData, ChartOptions, ChartType, RadialChartOptions} from 'chart.js';
import {DoughnutChartData, DoughnutChartType} from './charts/doghnut';
import {Color, Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions} from 'ng2-charts';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {DrillType} from '../custom-drill/custom-drill.page';
import {TargetType} from '../shared/drill/constants';
import {StorageService} from "../shared/services/storage.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('slides') slides;
    mySubscription: any = null;


    slideOpts = {
        slidesPerView: 1.2,
        spaceBetween: 0.2
    };




    optionsToRender = {
        rifle: [
            {
                range: 10,
                challengeRank:{
                    rank:3,
                    challengers:12
                },
                metadata:{
                    title:'Shoot As Fast As You Can',
                    numberOfBullets: 10,
                    FastTrigger: 'string',
                    useSplitTime: false,
                    useTotalTime: true,
                    drillType:DrillType.HitNoHit,
                    useHighestScore: false,
                    dateCreated: '2022-01-12T10:44:55.431Z',
                    isActive: true,
                    bgId:1,
                    distance:25,
                    targetType:TargetType.HitNoHit,
                    challngeId:1,
                },
            },
            {
                range: 10,
                challengeRank:{
                    rank:3,
                    challengers:12
                },
                metadata:{
                    title:'Shoot As Fast As You Can',
                    numberOfBullets: 10,
                    FastTrigger: 'string',
                    useSplitTime: false,
                    useTotalTime: true,
                    useHighestScore: false,
                    dateCreated: '2022-01-12T10:44:55.431Z',
                    isActive: true,
                    bgId:2,
                    distance:50,
                    targetType:TargetType.HitNoHit,
                    drillType:DrillType.HitNoHit,
                    challngeId:2
                },
            },
            {
                range: 10,
                challengeRank:{
                    rank:3,
                    challengers:12
                },
                metadata:{
                    title:'Shoot As Fast As You Can',
                    numberOfBullets: 10,
                    FastTrigger: 'string',
                    useSplitTime: false,
                    useTotalTime: true,
                    useHighestScore: false,
                    dateCreated: '2022-01-12T10:44:55.431Z',
                    isActive: true,
                    bgId:3,
                    targetType:TargetType.HitNoHit,
                    drillType:DrillType.HitNoHit,
                    distance:100,
                    challngeId:3
                },
            },
            {
                range: 10,
                challengeRank:{
                    rank:3,
                    challengers:12
                },
                metadata:{
                    title:'Shoot As Fast As You Can',
                    numberOfBullets: 10,
                    FastTrigger: 'string',
                    useSplitTime: false,
                    useTotalTime: true,
                    useHighestScore: false,
                    dateCreated: '2022-01-12T10:44:55.431Z',
                    isActive: true,
                    bgId:4,
                    distance:150,
                    targetType:TargetType.HitNoHit,
                    drillType:DrillType.HitNoHit,
                    challngeId:4
                },
            },
            {
                range: 10,
                challengeRank:{
                    rank:3,
                    challengers:12
                },
                metadata:{
                    title:'Shoot As Fast As You Can',
                    numberOfBullets: 10,
                    FastTrigger: 'string',
                    useSplitTime: false,
                    useTotalTime: true,
                    useHighestScore: false,
                    dateCreated: '2022-01-12T10:44:55.431Z',
                    isActive: true,
                    bgId:5,
                    targetType:TargetType.HitNoHit,
                    drillType:DrillType.HitNoHit,
                    challngeId:5
                },
            }
        ],
        pistol: [],
    };
    selectedChallengeFromFav: any;


    constructor(private platform: Platform,
                private networkService: NetworkService,
                private router: Router,
                public dashboardService: DashboardService,
                private userService: UserService,
                private zone: NgZone,
                private shootingService: ShootingService,
                private ble: BleService,
                public dialog: MatDialog,
                private cd: ChangeDetectorRef,
                private renderer: Renderer2,
                private initService: InitService,
                public storageService:StorageService,
                private screenOrientation:ScreenOrientation,
                private apiService: ApiService,
                private wizardService: WizardService,
                public modalController: ModalController,
                private srvPurchase: PurchaseService
                // private store: InAppPurchase2
    ) {



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




    getBackgroundImage(item: any) {
        if (item.metadata.bgId === 1) {
            return 'assets/challenges/sodlier-avg-split.png';
        } else if (item.metadata.bgId === 2) {
            return 'assets/challenges/soldier-againt-the-clock.png';
        } else if (item.metadata.bgId === 3) {
            return 'assets/challenges/soldier-fast.png';
        }
        else if (item.metadata.bgId === 4) {
            return 'assets/challenges/soldier-shoot-fast.png';
        } else {
            return 'assets/challenges/soldier-score.png';
        }
    }

    onChallengeChosen(challenge) {
        this.selectedChallengeFromFav = challenge;
        challenge.metadata.numOfBullets = challenge.metadata.numberOfBullets;
        this.shootingService.drillStarteEvent.next(true);
        this.shootingService.isChallenge = true;
        this.shootingService.numberOfBullersPerDrill = challenge.metadata.numberOfBullets;
        this.shootingService.challengeId = challenge.metadata.challengeId;
        this.shootingService.selectedDrill = challenge.metadata;
        this.shootingService.selectedDrill.bg = this.shootingService.selectedDrill.bgId
        this.shootingService.challenge = challenge;
    }
}
