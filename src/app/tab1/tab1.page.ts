import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    NgZone,
    OnDestroy,
    OnInit,
    Renderer2,
    ViewChild
} from '@angular/core';
import {IonRouterOutlet, IonSlides, ModalController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {InitService} from '../shared/services/init.service';
import {BleService} from '../shared/services/ble.service';
import {UserService} from '../shared/services/user.service';
import {NetworkService} from '../shared/services/network.service';
import {StorageService} from '../shared/services/storage.service';
import {DashboardModel} from '../shared/models/dashboard-model';
import {HistoryModel} from '../shared/models/HistoryModel';
import {Tab1Service} from './tab1-service.service';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import {Chart, ChartType} from 'chart.js';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {ApiService} from '../shared/services/api.service';
import {Label, MultiDataSet} from 'ng2-charts';
import {WizardService} from '../shared/authentication/signup-wizard/wizard.service';
import {MatDialog} from '@angular/material/dialog';
import {ActivityLogComponent} from '../shared/activity-log/activity-log.component';
import {ShootingService} from '../shared/services/shooting.service';
import {PaymentComponent} from '../shared/components/payment/payment.component';
import {SubscriptionPage} from '../shared/subscription/subscription.page';
import {PurchaseService} from '../shared/services/purchase.service';
  import {DrillConfirmDialogComponent} from '../shared/drill/drill-confirm-dialog/drill-confirm-dialog.component';

// import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('slides') slides: IonSlides;
    @ViewChild('lineChart') lineChart;
    @ViewChild('scatter') scatter;
    @ViewChild('radioChartInst') radio;

    line: any;
    scatterChartIns;
    radioChartInst;

    colorArray: any;

    public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: MultiDataSet = [
        [350, 450, 100],
        [50, 150, 120],
        [250, 130, 70],
    ];
    public doughnutChartType: ChartType = 'doughnut';

    private hitRatiochart: am4charts.PieChart;
    private rateOfFireChart: am4charts.XYChart;

    hits;
    shots;
    slideIndex = 0;
    profile;
    options = {
        borderWidth: [0, 0, 0, 0],
        height: 10

    };
    slideOpts = {
        slidesPerView: 1,
        spaceBetween: 0
    };

    hasConnection: boolean;
    data: DashboardModel;
    historicTrainings = {};
    points = 0;
    showUi = false;
    isNotTrainedYet = false;
    showWizard = false;
    showSignin = false;
    showRegular = true;
    degree = 0;
    mySubscription: any = null;

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
                private screenOrientation: ScreenOrientation,
                private storageService: StorageService,
                public modalController: ModalController,
                private routerOutlet: IonRouterOutlet,
                private srvPurchase: PurchaseService
                // private store: InAppPurchase2
    ) {

        if (localStorage.isLoggedIn && localStorage.isLoggedIn === 'true') {
            this.showSignin = false;
            this.showRegular = true;
            this.showWizard = false;
        } else {
            this.showSignin = true;
            this.showRegular = false;
            this.showWizard = false;
        }
        this.wizardService.notifyUserWasRegisterd.subscribe(data => {
            if (data) {

                this.showSignin = false;
                this.showRegular = true;
                this.showWizard = false;
                // this.openSubModal();
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
                debugger
            }
        })
    }


    getSubscription() {
        this.apiService.getSubscription(this.profile.id).subscribe((resp) => {
            if (resp) {
                this.mySubscription = resp;
            }
            console.log('what is getSubscription resp', resp);
        }, err => {

        });
    }

    ngOnInit(): void {
        if (this.showRegular) {
            this.initDashboard();
        }
        // setInterval(() => {
        //     const image = document.getElementById('myImage');
        //     this.renderer.setStyle(image, 'transform', 'rotate(' + this.degree + 'deg)');
        //     if (this.degree === 360) {
        //         this.degree = 0;
        //     } else {
        //         this.degree += 90;
        //     }

        // }, 1000);


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


    }


    initDashboard() {
        let userId = this.userService.getUserId();
        if (!userId) {
            userId = localStorage.getItem('userId');
        }

        this.apiService.getDashboardData(userId).subscribe(data => {
            this.data = data;
            this.storageService.setItem('homeData', data);
            this.showUi = true;
            this.profile = this.userService.getUser();
            console.log('this profile', this.userService.getUser().id);
            this.getSubscription();
            this.handleOfflineScenario();
            this.initService.isLoading.next(false);
            this.initService.isLoading.next(false);
            this.cd.detectChanges();
        });
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
        this.showSignin = true;
        this.showRegular = false;
        this.showWizard = false;
    }

    createLineChart() {
        if (this.lineChart && this.lineChart.nativeElement) {
            this.line = new Chart(this.lineChart.nativeElement, {
                type: 'line',
                data: {
                    labels: [100, 250, 200, 450, 300, 600],
                    datasets: [
                        {
                            data: [100, 250, 200, 450, 300, 600],
                            label: 'Africa',
                            borderColor: '#ce564b',
                            fill: false
                        }
                    ]
                },
                options: {
                    elements: {
                        line: {
                            tension: 0,
                            borderWidth: 2,
                        },
                        point: {
                            radius: 0
                        }
                    },
                    legend: {
                        display: false
                    },
                    responsive: true,
                    title: {
                        display: false,
                    },
                    scales: {
                        xAxes: [{
                            display: false,

                        }],
                        yAxes: [{
                            display: false,

                        }]
                    }
                }

            });
        }
    }

    createScatterChart() {
        if (this.scatter && this.scatter.nativeElement) {
            this.scatterChartIns = new Chart(this.scatter.nativeElement, {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'Scatter Dataset',
                            borderColor: '#ce564b',
                            pointBackgroundColor: '#ce564b',
                            fill: false,
                            data: [
                                {
                                    x: 1,
                                    y: 0
                                },
                                {
                                    x: 0,
                                    y: 2
                                },
                                {
                                    x: 3,
                                    y: 1
                                },
                                {
                                    x: 4,
                                    y: 2.5
                                },
                                {
                                    x: 5,
                                    y: 1
                                },
                                {
                                    x: 6,
                                    y: 0
                                }

                            ]
                        }
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    responsive: true,
                    title: {
                        display: false,
                    },
                    elements: {
                        point: {
                            radius: 5,
                        }
                    },
                    layout: {
                        padding: {
                            left: 25,
                            right: 5,
                            bottom: 20,
                            top: 15
                        }
                    },
                    scales: {
                        xAxes: [
                            {
                                type: 'linear',
                                position: 'bottom',
                                display: false,
                            }
                        ],
                        yAxes: [
                            {
                                display: false,
                            }
                        ]
                    }
                }
            });
        }

    }


    createRadioChart() {
        if (this.radio) {
            this.radioChartInst = new Chart(this.radio.nativeElement, {
                type: 'doughnut',
                data: {
                    datasets: [
                        {
                            borderColor: '#1C00ff00',
                            label: 'Population (millions)',
                            backgroundColor: ['#ce564b', '#d4d4d4'],
                            data: [this.data.hitRatioChart.totalHits, this.data.hitRatioChart.totalShots
                            - this.data.hitRatioChart.totalHits]
                        }
                    ]
                },
                options: {
                    cutoutPercentage: 85,
                    legend: {
                        display: false
                    },
                    responsive: true,
                    title: {
                        display: false,
                    },
                    scales: {
                        xAxes: [{
                            display: false,

                        }],
                        yAxes: [{
                            display: false,

                        }]
                    },
                }
            });
        }
    }

    slideChanged() {
        this.slides.getActiveIndex().then((index: number) => {
            this.slideIndex = index;
            console.log('currentIndex:', index);
        });
    }

    onNextSlide() {
        this.slides.slideNext(1000);
    }

    onPrevSlide() {
        this.slides.slidePrev(1000);
    }

    onActivityClicked() {
        this.storageService.passhistoricalTrainingsDate(this.data.trainingHistory);
        this.dialog.open(ActivityLogComponent, {
            panelClass: 'full-screen-modal',
            data: {modalType: 'general'}
        });
    }


    private handleOnlineScenario() {

    }

    private handleOfflineScenario() {
        this.data = this.storageService.getItem('homeData');
        if (this.data) {
            if (this.data.trainingHistory) {
                this.extractPoints();
            }
            if (this.data.hitRatioChart) {
                this.hits = this.data.hitRatioChart.totalHits;
                this.shots = this.data.hitRatioChart.totalShots;
            }

            if (this.data.trainingHistory) {
                this.data.trainingHistory.forEach(train => {
                    const monthName = new Date(train.drillDate).toLocaleString('default', {month: 'long'});
                    if (!(this.historicTrainings[monthName])) {
                        this.historicTrainings[monthName] = {};
                    }
                    const tempDate = new Date(train.drillDate);
                    const key = tempDate.getDate() + '.' + (tempDate.getMonth() + 1) + '.' + tempDate.getFullYear();
                    const day = new Date(tempDate).toLocaleString('default', {weekday: 'long'});
                    if ((!this.historicTrainings[monthName][key])) {
                        this.historicTrainings[monthName][key] = {
                            data: [],
                            day
                        };
                    }
                    this.historicTrainings[monthName][key].data.push(train);
                });
            }
        }

        // this.tab1Service.setTextInCenterForHitRatio(this.hitRatioChart);

        setTimeout(() => {
            this.createLineChart();
            this.createScatterChart();
            this.createRadioChart();
        }, 100);
    }

    datesAreOnSameDay(first, second) {
        return first.getFullYear() === second.getFullYear() &&
            first.getMonth() === second.getMonth() &&
            first.getDate() === second.getDate();
    }

    ngAfterViewInit() {

    }

    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.hitRatiochart) {
                this.hitRatiochart.dispose();
            }
        });
    }

    private setupHitratioChart() {
        this.hitRatiochart = am4core.create('chartdiv', am4charts.PieChart);
        const {data} = this.tab1Service.setupDataForHitration(this.data.hitRatioChart);

        this.hitRatiochart.data = [{
            text: 'Hits',
            litres: data[0],
            color: '#df9e46'
        }, {
            text: 'Misses',
            litres: data[1],
            color: '#d9d9d9'
        }];

        // Set inner radius
        this.hitRatiochart.innerRadius = am4core.percent(50);

        // Add and configure Series
        const pieSeries = this.hitRatiochart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = 'litres';
        pieSeries.dataFields.category = 'text';
        pieSeries.slices.template.stroke = am4core.color('#fff');
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
        pieSeries.labels.template.disabled = true;
        pieSeries.slices.template.tooltipText = '';
        pieSeries.slices.template.propertyFields.fill = 'color';

        const label = pieSeries.createChild(am4core.Label);
        label.text = data[0] + '% Hits';
        label.horizontalCenter = 'middle';
        label.verticalCenter = 'middle';
        label.fontSize = 25;

    }

    private setupRateOfFireChart() {
        this.rateOfFireChart = am4core.create('rateOfFireChart', am4charts.XYChart);
        this.rateOfFireChart.data = [{
            country: 'world',
            visits: 2025,
            color: '#df9e46'
        }, {
            country: 'user',
            visits: 1882,
            color: '#d9d9d9'
        }];

        // Create axes

        const categoryAxis = this.rateOfFireChart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'country';
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        categoryAxis.renderer.labels.template.adapter.add('dy', (dy, target) => {
            // tslint:disable-next-line:no-bitwise
            // @ts-ignore
            // tslint:disable-next-line:no-bitwise
            if (target.dataItem && target.dataItem.index & 2 === 2) {
                return dy + 25;
            }
            return dy;
        });

        const valueAxis = this.rateOfFireChart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        const series = this.rateOfFireChart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = 'visits';
        series.dataFields.categoryX = 'country';
        series.name = 'Visits';
        series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
        series.columns.template.fillOpacity = .8;
        series.columns.template.propertyFields.fill = 'color';
        const columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
    }

    private extractPoints() {
        this.data.trainingHistory.forEach((train) => {
            this.points += train.points;
        });
    }

    isIos() {
        return this.platform.is('ios');
    }

    doRefresh(event) {
        console.log('Pull Event Triggered!');
        this.initDashboard();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }

    onSelectTarget() {
        if (this.shootingService.isTargetConnected) {
            this.router.navigateByUrl('choose');
        } else {
            this.router.navigateByUrl('select-target');
        }
    }

    async openSubModal() {
        // const modal = await this.modalController.create({
        //      component: SubscriptionPage,
        //      swipeToClose: false,
        //      presentingElement: this.routerOutlet.nativeEl,
        //      cssClas.s:'modal-fullscreen'
        //
        //  });
        //  return await modal.present();
    }

    openDialogFake() {
        const dialogRef = this.dialog.open(DrillConfirmDialogComponent, {
            height: '80%',
            width: '60%',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result.status}`);
        });
    }
}
