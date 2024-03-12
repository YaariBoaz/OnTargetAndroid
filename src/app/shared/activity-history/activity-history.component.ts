// @ts-ignore
import {
    AfterViewInit,
    Component,
    ElementRef,
    Inject,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {Router} from '@angular/router';
import {HistoryValueItemModel} from '../models/HistoryModel';
import {TargetType} from '../drill/constants';
import {DrillType} from '../../custom-drill/custom-drill.page';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {ChartData, ChartOptions, ChartType, RadialChartOptions} from 'chart.js';
import {DashboardService} from '../../dashboard/dashboard.service';
import {ChallengesService} from "../ChooseDrill/challenges.service";

// @ts-ignore
@Component({
    selector: 'app-activity-history',
    templateUrl: './activity-history.component.html',
    styleUrls: ['./activity-history.component.scss'],
})
export class ActivityHistoryComponent implements OnInit, OnChanges,AfterViewInit {
    @ViewChild('container') container: ElementRef;
    rankSystem = {
        beginner: 0,
        intermediate: 250,
        senior: 400,
        pro: 700

    }
    myRank;
     totalHits: number;
     totalScore: number;
    totalBullets: number;
    challengesCompleted: void;
    challengesCompletedPrecent = 0;
    public get targetTypeEnum(): typeof TargetType {
        return TargetType;
    }

    public get drillTypeEnum(): typeof DrillType {
        return DrillType;
    }

    openShowMore: false
    train = {
        date: '05.07.18',
        day: 'Tuesday',
        numberOfDrills: 6,
    };
    drills: HistoryValueItemModel[];
    hasConnection;
    currentDate = new Date();
    numOfTrainings;
    beutifiedDate;
    stats = [];
    summaryObject;
    trains = [];
    targetW;
    targetH;

    public doughnutChartColors: Color[] = [{
        backgroundColor: ['#78d857', '#fff'],
        borderWidth:1,
        borderColor:'#ffffff3d'
    }];
    doughnutChartPlugins;
    public doughnutChartLabels: Label[] = ['HIT', 'MISS'];
    public doughnutChartData: MultiDataSet=[]
    public doughnutChartType: ChartType = 'doughnut';
    doughnutChartOptions:ChartOptions = {
        responsive:true,
        maintainAspectRatio: false,
        legend:{
            display:false
        },
        cutoutPercentage:87,
        // @ts-ignore
        dashboardSerice:this.dashboardService
     };
    avgSessionTime = 0;
    avgHits = 0;
    avgMiss = 0;
    chartDataReady = false;
    selectedTab = 'stats';
    chartIsReady = false;
    madadToUse = 220;

    constructor(private router: Router,private challengesService:ChallengesService,public dashboardService:DashboardService) {
        this.getAvgs();
        this.getStats();

    }

    ngAfterViewInit(): void {

    }

    ngOnInit() {
        this.doughnutChartPlugins= [this.returnObjectDoughnutChartPlugins()];
        const percent = this.dashboardService.getHitRatio().percent;
        this.doughnutChartData = [[percent, 100-percent]]
    }

    returnObjectDoughnutChartPlugins(){
        return {
            beforeDraw(chart, args, options) {
                const ctx = chart.ctx;const ratio = chart.config.options.dashboardSerice.getHitRatio();
                const txt = ratio.text;
                // Get options from the center object in options
                const sidePadding = 60;
                // @ts-ignore
                const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)

                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
                const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

                // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
                const stringWidth = ctx.measureText(txt).width;
                // @ts-ignore
                const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

                // Find out how much the font can grow in width.
                const widthRatio = elementWidth / stringWidth;
                const newFontSize = Math.floor(12 * widthRatio);
                // @ts-ignore
                const elementHeight = (chart.innerRadius * 2);

                // Pick a new font size so it will not be larger than the height of label.
                const fontSizeToUse = 18;

                ctx.font = fontSizeToUse + 'px Arial';
                ctx.fillStyle = 'white';

                // Draw text in center
                ctx.fillText(ratio.text, centerX, centerY);
            }
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    toggleAccordian(event, index) {
        const element = event.target;
        element.classList.toggle('active');
        if ((this.drills[index] as any).isActive) {
            (this.drills[index] as any).isActive = false;
        } else {
            (this.drills[index] as any).isActive = true;
        }
        const panel = element.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    }

    onBackPressed() {
    }

    handleOfflineScenario() {
    }

    miliToTime(duration) {
        // tslint:disable-next-line:radix
        const milliseconds: any = parseInt(String((duration % 1000) / 100));
        let seconds: any = Math.floor((duration / 1000) % 60);
        let minutes: any = Math.floor((duration / (1000 * 60)) % 60);
        let hours: any = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        return minutes + ':' + seconds + '.' + milliseconds;
    }

    handleOnlineScenario() {

    }

    toggleMenu(menu: HTMLElement) {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        } else {
            menu.classList.add('active');
        }
    }

     getAvgs() {
        const activityHistory = JSON.parse(localStorage.getItem('activityHistory'));
        if(activityHistory){
            let totalSeconds = 0;
            let totalHits = 0;
            let totalMiss = 0;
            Object.keys(activityHistory).forEach(key =>{
                totalSeconds+= this.dashboardService.getTotalSecondsPerSession(activityHistory[key].summaryObject.totalTime)
                totalHits+= this.dashboardService.getTotalHitsPerSession(activityHistory[key].summaryObject.points);
                totalMiss+= this.dashboardService.getTotalMissPerSession(activityHistory[key].drill.numOfBullets,
                    activityHistory[key].summaryObject.points);
            })
            this.avgSessionTime = totalSeconds
            this.avgHits = totalHits;
            this.avgMiss = totalMiss;
            this.chartDataReady = true;
        }
    }


    geDevicetWidth() {
        return window.innerWidth - 40
    }
    geDevicetHeight() {
        return window.innerWidth - 150
    }

    secondsToString(sumSeconds){
        const secNum = parseInt(sumSeconds, 10); // don't forget the second param
        let hours:any   = Math.floor(secNum / 3600);
        let minutes:any = Math.floor((secNum - (hours * 3600)) / 60);
        let seconds:any = secNum - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = '0'+hours;}
        if (minutes < 10) {minutes = '0'+minutes;}
        if (seconds < 10) {seconds = '0'+seconds;}
        console.log(hours+':'+minutes+':'+seconds);
        return hours+':'+minutes+':'+seconds;
    }

    getChallegesCompleted():any {
        const arr = this.dashboardService.getTrains();
        const challengesCompleted = {};
        if(arr){
            arr.forEach(item =>{
                if(item.drill.challngeId){
                    if(!challengesCompleted.hasOwnProperty(item.drill.challngeId)){
                        challengesCompleted[item.drill.challngeId] = true;
                    }
                }
            })
            const amountDone =  Object.keys(challengesCompleted).length;
            const total = (this.challengesService.optionsToRender.rifle.length + this.challengesService.optionsToRender.pistol.length);
            this.challengesCompletedPrecent = (100 * amountDone ) /total;
        }
    }


    private getStats() {
        this.trains = this.dashboardService.getTrains();
        console.log(this.trains);
        this.totalHits = this.dashboardService.getTotalHits(this.trains)
        this.totalScore = this.dashboardService.getTotalScore(this.trains);
        this.myRank = (100 * this.totalScore) / this.rankSystem.pro;
        this.totalBullets = this.dashboardService.getTotalBullets(this.trains);
        this.challengesCompleted = this.getChallegesCompleted();
    }
}

export interface TrainingHistory {
    date: string;
    day: string;
    numberOfDrills: number;
    hits: number;
    totalShots: number;
    range: number;
    timeLimit: number;
    drillType: string;
    points: number;
    recommendation: string;
}
