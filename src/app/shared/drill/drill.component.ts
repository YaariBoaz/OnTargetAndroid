import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef, HostListener,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import * as Hammer from 'hammerjs';

import {ShootingService} from '../services/shooting/shooting.service';
import {DrillObject, DrillType} from '../../custom-drill/custom-drill.page';
import {StorageService} from '../services/storage.service';
import {countUpTimerConfigModel, CountupTimerService, timerTexts} from 'ngx-timer';
import {UserService} from '../services/user.service';
import {ApiService} from '../services/api.service';
import {BleService} from '../services/ble.service';
import {HitNohitService} from './hit-nohit.service';
import {Router} from '@angular/router';
import {AlertController, IonRouterOutlet, ModalController, ToastController} from '@ionic/angular';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {GatewayService} from '../services/gateway.service';
import {InitService} from '../services/init.service';
import {FakeData} from './fakeData';
import {ConstantData, TargetType} from './constants';
import {NativePageTransitions, NativeTransitionOptions} from '@ionic-native/native-page-transitions/ngx';
import {BalisticCalculatorService} from '../services/balistic-calculator.service';
import {HammerGestureConfig} from '@angular/platform-browser';
import {BulletBankService} from '../services/bullet-bank.service';
import {SubscriptionPage} from '../subscription/subscription.page';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-session-modal',
    templateUrl: './drill.component.html',
    styleUrls: ['./drill.component.scss'],
})
export class DrillComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {


    public counter = 0;
    public showCounter = false;
    public showResults = false;


    @Input() isHistory = false;
    @Input() historyDrill: DrillObject;
    @ViewChild('container') container: ElementRef;
    @ViewChild('screen') screen: ElementRef;
    @ViewChild('canvas') canvas: ElementRef;
    @ViewChild('downloadLink') downloadLink: ElementRef;
    @ViewChild('scrollMe', {static: true}) myScrollContainer: ElementRef;


    subscription = new Subscription();

    /* FOR DEMO */


    /*  END FOR DEMO*/
    profile: any;
    shots = [];
    shotsThatAreNotCounted = [];
    drill;
    testConfig: any;
    RANDOM_TIMES = FakeData.RANDOM_TIMES;


    drillFinished = false;

    DEFUALT_PAGE_DATE = ConstantData.DEFUALT_PAGE_DATE;
    pageData = ConstantData.pageData;
    DEFAULT_SUMMARY_OBJECT = ConstantData.DEFAULT_SUMMARY_OBJECT;
    summaryObject = ConstantData.summaryObject;


    height: number;
    width: number;
    private interval;
    stats = [];
    batteryPrecent;
    isConnected = true;
    drillFinishedBefore = false;
    isHit = false;
    private hitNumber = 0;
    isFinish = false;
    shotNumber = 0;
    loader;
    isHitNoHit = true;
    drillHasNotStarted = true;
    drillIsFinished = false;
    isGateway = false;
    selectedTarget: any;
    fakeStats = FakeData.fakeStats;
    fakeShots = FakeData.fakeShots;
    targetType: TargetType;
    isZero: boolean;
    isNotEnoughBullets = false;
    weaponToShow;
    sightToShow;
    leftClick = 0;
    upclick = 0;
    rightClick = 0;
    downClick = 0;
    groupingStatus: string;
    groupingNumber;
    targetH;
    targetW;
    madadToUse;
    panValue = 0;
    targetDynamicWidth = 100;
    targetJustifyConent = 'center';
    isChallenge;
    challangeNotStarted = true;

    public get backgroundsEnum(): typeof Backgrounds {
        return Backgrounds;
    }

    public get targetTypeEnum(): typeof TargetType {
        return TargetType;
    }

    public get drillTypeEnum(): typeof DrillType {
        return DrillType;
    }
    constructor(
        private screenOrientation: ScreenOrientation,
        private storageService: StorageService,
        private shootingService: ShootingService,
        private bulletBankService:BulletBankService,
        private countupTimerService: CountupTimerService,
        public toastController: ToastController,
        private userService: UserService,
        private apiService: ApiService,
        private nativePageTransitions: NativePageTransitions,
        private bleService: BleService,
        private gateway: GatewayService,
        private cd: ChangeDetectorRef,
        private modalController:ModalController,
        private router: Router,
        private routerOutlet: IonRouterOutlet,
        private ngZone: NgZone,
        private initService: InitService,
        public alertController: AlertController,
        private hitNohitService: HitNohitService,
        private balisticCalculatorService: BalisticCalculatorService
    ) {
        this.shootingService.isInDrill.next(true);
        this.drill = this.shootingService.selectedDrill;
        if (this.drill.challngeId) {
            this.isChallenge = true;

        }
        this.selectedTarget = this.shootingService.chosenTarget;
        this.isGateway = this.initService.isGateway;
        this.setTargetType(JSON.parse(localStorage.getItem('slectedTarget')).name);
        this.hitNohitService.setDrill(this.drill);
        this.hitNohitService.initStats();
        this.setTimeElapse();
        this.isZero = this.shootingService.getIsZero();
        this.balisticCalculatorService.resetStats();
        if (this.isZero) {
            const napar = this.balisticCalculatorService.calcNapar(true, this.targetType);
            this.shotsThatAreNotCounted.push({x: napar.napar.x, y: napar.napar.y, isNapar: true});
        }
        this.targetW = this.initService.screenW;
        this.targetH = this.initService.screenH;

        if (this.targetW > this.targetH) {
            this.madadToUse = 220;
        } else {
            this.madadToUse = 220;
        }
    }


    ngAfterViewInit(): void {
    }

    ngOnInit() {
        this.profile = this.userService.getUser();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.registerNotifications();
    }


    async showToast(msg: string, color: string) {
        const toast = await this.toastController.create({
            message: msg,
            color,
            duration: 2000
        });
        toast.present();
    }


    setTimeElapse() {
        this.countupTimerService.stopTimer();
        this.countupTimerService.setTimervalue(0);

        this.testConfig = new countUpTimerConfigModel();
        this.testConfig.timerClass = 'test_Timer_class';
        // timer text values
        this.testConfig.timerTexts = new timerTexts();
        this.testConfig.timerTexts.hourText = ':'; // default - hh
        this.testConfig.timerTexts.minuteText = ':'; // default - mm
        this.testConfig.timerTexts.secondsText = ' '; // default - ss
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.isHistory) {
            this.isHistory = changes.isHistory.currentValue;
        }
        if (changes && changes.historyDrill) {
            this.historyDrill = changes.historyDrill.currentValue;
        }

    }


    initStats() {
        this.balisticCalculatorService.resetStats();
        this.hitNohitService.initStats();
        this.gateway.initStats();
        this.drillIsFinished = false;
        this.resetShots();
        console.log('This is in the init stats of the session');
        this.drillFinished = false;
        this.shots = [];

        this.stats = [];
        this.shotNumber = 0;
        this.isFinish = false;
        this.summaryObject = this.DEFAULT_SUMMARY_OBJECT;
        if (!this.pageData) {
            this.pageData = this.pageData;
        } else {
            this.pageData.counter = 0;
            this.pageData.distanceFromCenter = 0;
            this.pageData.splitTime = '0:00';
            this.pageData.rateOfFire = 0;
            this.pageData.points = 0;
            this.pageData.totalTime = '0:00';
        }
        if (this.countupTimerService) {
            this.countupTimerService.stopTimer();
            this.countupTimerService.setTimervalue(0);
        }
        this.cd.detectChanges();

    }

    async onBackPressed() {
        this.countupTimerService.stopTimer();
        this.drillIsFinished = false;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT).then();
        this.router.navigateByUrl('/dashboard',{ replaceUrl: true }).then();
        this.shootingService.isInDrill.next(false);
       // await this.closeDrillBeforeFinish(false);

    }

    ionViewWillEnter() {
        this.bleService.isConnected().then((status) => {
            console.log('IS CONNECTED: ', status);
        }, error => {
            console.log(error);
        });
        //  this.drill = this.shootingService.selectedDrill;
        if (!this.drill.weapon) {
            this.weaponToShow = 'Rifle';
            this.sightToShow = '';
        } else {
            this.weaponToShow = this.drill.weapon.split(' ')[0];
            this.sightToShow = this.drill.sight.split(' ')[0];
        }


        this.countupTimerService.stopTimer();
        this.countupTimerService.setTimervalue(0);
        this.drillHasNotStarted = true;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE).then(r => {
        });
        this.showResults = false;
        this.showCounter = false;
        this.drillHasNotStarted = true;
    }

    @HostListener('unloaded')
    ngOnDestroy() {
        this.subscription.unsubscribe();
        console.log('[OnDestroy] Session Component');
    }


    async restartShooting() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            message: 'Save session ?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Pressed Cancel');
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.ngZone.runGuarded(() => {
                            if(this.targetType === TargetType.HitNoHit){
                                this.saveActivityForOfflineApp()
                                this.initStats();
                                this.setTimeElapse();
                                this.bleService.resetShots();
                                this.stats = Object.assign(this.stats, []);
                                this.drillHasNotStarted = true;
                                this.showResults = false;
                            }
                            else {
                                this.groupingNumber = 0;
                                this.countupTimerService.stopTimer();
                                if (this.isGateway) {
                               //     this.bulletBankService.subtractBullets(this.shots.length);
                                    // this.gateway.updateHistory();
                                    this.saveActivityForOfflineApp()
                                    this.gateway.initStats();
                                } else {
                               //     this.bulletBankService.subtractBullets(this.shotNumber);
                                    // this.hitNohitService.updateHistory();
                                    this.saveActivityForOfflineApp()
                                    this.hitNohitService.initStats();
                                }
                                this.initStats();
                                this.setTimeElapse();
                                this.bleService.resetShots();
                                this.stats = Object.assign(this.stats, []);
                                this.drillHasNotStarted = true;
                                this.showResults = false;
                                // if (this.bulletBankService.getNumberOfBulletsRemaining() - this.drill.numOfBullets  <= 0) {
                                //     this.handleNoBulletsLeftAfterRestart();
                                // }
                            }
                        });
                    }
                },
                {
                    text: 'No',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        this.ngZone.runGuarded(() => {
                          //  this.bulletBankService.subtractBullets(this.shots.length);
                            this.groupingNumber = 0;
                            this.countupTimerService.stopTimer();
                            if (this.isGateway) {
                         //       this.bulletBankService.subtractBullets(this.shots.length);
                                this.gateway.initStats();
                            } else {
                           //     this.bulletBankService.subtractBullets(this.shotNumber);
                               this.hitNohitService.initStats();
                            }
                            this.initStats();
                            this.setTimeElapse();
                            this.bleService.resetShots();
                            this.stats = Object.assign(this.stats, []);
                            this.drillHasNotStarted = true;
                            // this.showResults = false;
                            // if (this.bulletBankService.getNumberOfBulletsRemaining() - this.drill.numOfBullets  <= 0) {
                            //     this.handleNoBulletsLeftAfterRestart();
                            //
                            // }
                        });
                    }
                }
            ]
        });
        await alert.present();
    }

    resetShots() {
        this.bleService.resetShots();
        this.shots = [];
        let napamToDelete = null;
        this.shotsThatAreNotCounted.forEach(item => {
            if (item.isNapam) {
                napamToDelete = item;
            }
        });

        if (napamToDelete) {
            this.shotsThatAreNotCounted.splice(this.shotsThatAreNotCounted.indexOf(napamToDelete), 1);
        }
    }


    async closeDrillBeforeFinish(isReset) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            message: 'Save session ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Pressed Cancel');
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.ngZone.runGuarded(() => {

                            if (this.isGateway) {
                                this.gateway.updateHistory();
                                this.gateway.initStats();
                                this.bulletBankService.subtractBullets(this.shots.length);
                            } else {
                                this.hitNohitService.updateHistory();
                                this.hitNohitService.initStats();
                                this.bulletBankService.subtractBullets(this.shotNumber);
                            }
                            this.initStats();
                            this.bleService.resetShots();
                            this.stats = Object.assign(this.stats, []);
                            if (!this.isChallenge) {
                                this.router.navigateByUrl('home',{ replaceUrl: true });
                            } else {
                                this.router.navigateByUrl('home',{ replaceUrl: true });
                            }
                            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

                        });
                    }
                },
                {
                    text: 'No',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        this.ngZone.runGuarded(() => {
                            this.bulletBankService.subtractBullets(this.shots.length);
                            if (this.isGateway) {
                                this.gateway.initStats();
                                this.bulletBankService.subtractBullets(this.shots.length);
                            } else {
                                this.hitNohitService.initStats();
                                this.bulletBankService.subtractBullets(this.shotNumber);
                            }
                            this.initStats();
                            this.bleService.resetShots();
                            this.stats = Object.assign(this.stats, []);
                            if (!this.isChallenge) {
                                this.router.navigateByUrl('home',{ replaceUrl: true });
                            } else {
                                this.router.navigateByUrl('home',{ replaceUrl: true });
                            }
                            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                        });
                    }
                }
            ]
        });
        await alert.present();
    }

    onReconnect() {
        this.bleService.connect(this.bleService.currentTargetId);
    }

    activateCounter() {
        this.counter = 3;
        this.showCounter = true;
        this.stats = Object.assign(this.stats, []);
        this.setTimeElapse();
        this.initStats();
        this.bleService.resetShots();
        const interval = setInterval(() => {
            this.counter--;
            if (this.counter < 1) {
                this.countupTimerService.startTimer();
                this.counter = 3;
                this.showResults = true;
                this.showCounter = false;
                this.drillHasNotStarted = false;
                this.bleService.resetShots();
                // const data = [];
                // for (let i = 65; i <= 425; i += 20) {
                //     for (let j = 65; j <= 425; j += 20) {
                //         if ((i >= 125 && i <= 365) && (j >= 125 && j <= 365)) {
                //
                //         } else {
                //             data.push([i, j]);
                //         }
                //     }
                // }
                // for (let i = 65; i <= 425; i += 15) {
                //     for (let j = 65; j <= 425; j += 15) {
                //         if ((i >= 125 && i <= 365) && (j >= 125 && j <= 365)) {
                //             data.push([i, j]);
                //         } else {
                //
                //         }
                //     }
                // }
                // data.forEach(item => {
                //     this.gateway.handleShot_MSG_NEW(item[0], item[1]);
                // });
                clearInterval(interval);
                setTimeout(() => {
                    this.gateway.height = this.madadToUse;
                    this.gateway.width = this.madadToUse;
                    this.balisticCalculatorService.divWidth = this.madadToUse;
                    this.balisticCalculatorService.divHeight = this.madadToUse;
                    if (this.isGateway) {
                        this.gateway.initStats();
                    } else {
                        this.hitNohitService.initStats();
                    }
                }, 1);


            }
        }, 1000);
    }

    private registerNotifications() {
        this.registerHitNoHitNotifications();
        this.registerGatewayNotifications();
        this.registerBLENotifications();
        this.registerBatteryState();
        this.subscription.add(this.shootingService.drillStarteEvent.subscribe(data => {
            if (data) {
                this.drillIsFinished = false;
            }
        }));
    }

    private registerHitNoHitNotifications() {
        this.subscription.add(this.hitNohitService.hitArrived.subscribe((data) => {
            if (data !== null && !this.drillHasNotStarted && !this.drillIsFinished) {
                this.shotNumber = data.statsData.stats.length;
                this.stats = data.statsData.stats;
                this.pageData = data.statsData.page;
                this.isFinish = data.statsData.isFinish;
                this.summaryObject = data.statsData.summaryObject;
                this.cd.detectChanges();
                if (this.drill.numOfBullets === this.stats.length) {
                    this.drillIsFinished = true;
                    this.cd.detectChanges();
                    this.countupTimerService.pauseTimer();
                    this.saveActivityForOfflineApp()
                    localStorage.getItem('activityHistory')
                }
            }
        }));
        this.subscription.add(this.hitNohitService.drillFinishedNotify.subscribe(data => {
            if (data) {
                this.drillIsFinished = true;
            }
        }));
        this.subscription.add(this.hitNohitService.resetDrillSubject.subscribe((flag) => {
            if (flag) {
                this.initStats();
            }
        }));
    }
    saveActivityForOfflineApp(){
        const stateToSave = {
            drill:this.drill,
            stats:this.stats,
            pageDate:this.pageData,
            summaryObject:this.summaryObject,
            rawHitsLocation:this.gateway.hits
        }
        let dictionary = localStorage.getItem('activityHistory')
        if(!dictionary) {
            const obj = new Object();
            obj[new Date().getTime().toString()] = stateToSave;
            localStorage.setItem('activityHistory',JSON.stringify(obj));
        }else{
            dictionary = JSON.parse(dictionary);
            dictionary[new Date().getTime().toString()] = stateToSave;
            localStorage.setItem('activityHistory',JSON.stringify(dictionary));
        }
        setTimeout(()=>{this.shootingService.setBestResults()},100)
        this.drillHasNotStarted = true;
    }
    registerGatewayNotifications() {
        this.subscription.add(this.gateway.drillFinishedNotify.subscribe(data => {
            if (data) {
                this.drillIsFinished = true;
            }
        }));
        this.subscription.add(this.gateway.hitArrived.subscribe((data: any) => {
            if (data && !this.isFinish && data.statsData.stats.length > 0) {
                if (this.drill.drillType === 3 && data.statsData.zeroData && Object.keys(data.statsData.zeroData).length !== 0) {
                    this.updateZeroData(data);
                } else {
                    this.shotNumber = data.hitNumber;
                    if (data.statsData && data.statsData.zeroData) {
                        this.groupingNumber = data.statsData.zeroData.napar2Napam / 2.54;
                    }
                    this.stats = data.statsData.stats;
                    this.pageData = data.statsData.pageData;
                    this.isFinish = data.statsData.isFinish;
                    this.summaryObject = data.statsData.summaryObject;
                    this.shots.push({x: data.statsData.shot.x, y: data.statsData.shot.y});
                    this.cd.detectChanges();
                    setTimeout(()=>{
                        this.scrollToBottom();
                    },500)
                    if (this.drill.numOfBullets === this.stats.length) {
                        this.drillIsFinished = true;
                        this.cd.detectChanges();
                        this.countupTimerService.pauseTimer();
                    }
                }
            }
        }));

        this.subscription.add(this.gateway.notifyShotArrivedFromGateway.subscribe((data) => {
            if (data) {
                this.shots.push({x: data.x, y: data.y});
            }
        }));
    }

    registerBLENotifications() {
        this.subscription.add(this.bleService.notifyTargetConnected.subscribe(status => {
            if (status) {
                this.isConnected = true;
                // const loader = this.showToast('Target Connected', 'success');
            }

        }));
        this.subscription.add(this.bleService.notifyDisconnect.subscribe((flag) => {
            if (flag) {
                if (!flag.isManually) {
                    // this.isConnected = false;
                    // this.cd.detectChanges();
                    // const loader = this.showToast('The target has been disconnected \n System trying to reconnect', 'danger');
                }
            }
        }));
    }

    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) {
        }
    }

    ionViewWillLeave() {

        const options: NativeTransitionOptions = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };

        this.nativePageTransitions.slide(options)
            .then(() => {
            })
            .catch(() => {
            });

    }

    setTargetType(name) {
        if (name.indexOf('003') > -1 || name.indexOf('64') > -1) {
            this.targetType = TargetType.Type_64;
            this.isGateway = true;
            return;
        } else if (name.indexOf('128') > -1) {
            this.targetType = TargetType.Type_128;
            this.isGateway = true;
            return;
        } else if (name.indexOf('16') > -1) {
            this.targetType = TargetType.Type_16;
            this.isGateway = true;
            return;
        } else if (name.indexOf('c') > -1) {
            this.targetType = TargetType.Type_128;
            this.isGateway = true;
            return;
        } else if (name.indexOf('a') > -1) {
            this.targetType = TargetType.Type_16;
            this.isGateway = true;
            return;
        } else if (name.indexOf('b') > -1) {
            this.targetType = TargetType.Type_64;
            this.isGateway = true;
            return;
        } else {
            this.isGateway = false;
            this.targetType = TargetType.HitNoHit;
            return;
        }
    }

    private registerBatteryState() {
        this.subscription.add(this.gateway.notifyTargetConnectedToGateway.subscribe(data => {
            this.isConnected = true;
        }));
        this.subscription.add(this.gateway.notifyTargetBattery.subscribe(data => {
            this.batteryPrecent = data;
        }));
    }

    onSwipe(evt) {
        console.log('swipe left');
        this.panValue = 400;
        this.targetDynamicWidth = 100;
        this.targetJustifyConent = 'space-between';

    }

    onSwipeRight($event: any) {
        setTimeout(() => {
            console.log('swipe right');
            this.panValue = 0;
            this.targetJustifyConent = 'center';
        }, 100);

    }

    private updateZeroData(data: any) {
        this.leftClick = data.statsData.zeroData.leftClick;
        this.upclick = data.statsData.zeroData.upclick;
        this.rightClick = data.statsData.zeroData.rightClick;
        this.downClick = data.statsData.zeroData.downClick;
        this.groupingNumber = data.statsData.zeroData.napar2Napam;
        this.groupingStatus = data.statsData.zeroData.status;
        this.shots.push({x: data.statsData.shot.x, y: data.statsData.shot.y, isBarhan: data.isBarhan});
        let napamToDelete = null;
        this.shotsThatAreNotCounted.forEach(item => {
            if (item.isNapam) {
                napamToDelete = item;
            }
        });

        if (napamToDelete) {
            this.shotsThatAreNotCounted.splice(this.shotsThatAreNotCounted.indexOf(napamToDelete), 1);
        }
        if (data.statsData.zeroData.napamToView.x !== 0 && data.statsData.zeroData.napamToView.y !== 0) {
            this.shotsThatAreNotCounted.push({
                x: data.statsData.zeroData.napamToView.x,
                y: data.statsData.zeroData.napamToView.y,
                isNapam: true
            });
        }
        this.cd.detectChanges();
        this.stats = data.statsData.stats;
        this.pageData = data.statsData.pageData;
        this.isFinish = data.statsData.isFinish;
        this.summaryObject = data.statsData.summaryObject;
        this.scrollToBottom();
        if (this.drill.numOfBullets === this.stats.length) {
            this.drillIsFinished = true;
            this.cd.detectChanges();
        }
    }

    private async handleNoBulletsLeftAfterRestart() {
        await this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        const modal = await this.modalController.create({
            component: SubscriptionPage,
            swipeToClose: false,
            presentingElement: this.routerOutlet.nativeEl,
            cssClass:'modal-fullscreen'

        });
        return await modal.present();
        this.isNotEnoughBullets = true;
    }
}

export class MyHammerConfig extends HammerGestureConfig {
    overrides = {
        swipe: {direction: Hammer.DIRECTION_ALL},
    } as any;
}

export enum Backgrounds {
    DESERT,
    WINTER,
    DARK,
    FOREST
}
