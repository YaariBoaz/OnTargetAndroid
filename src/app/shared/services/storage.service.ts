import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from './api.service';
import {HistoryModel, HistoryValueItemModel} from '../models/HistoryModel';
import {BestScores, DashboardModel, HitRatioChart, RateOfFireChart} from '../models/dashboard-model';
import {BleService} from './ble.service';


@Injectable({
    providedIn: 'root'
})
export class StorageService {
    notifyTargetListChanged = new BehaviorSubject(JSON.parse(localStorage.getItem('ble')));
    DEFAULT_DATA: DashboardModel = new DashboardModel();
    data = {};
    DATA_NAME = 'homeData';
    historicalTrainingsDate$ = new BehaviorSubject<any>(null);
    passTrainingsInDate$ = new BehaviorSubject<any>(null);
    DEFAULT_WEAPONS = [
        'AR-15',
        'M4',
        'MP5',
        'DOUBLE BARREL SHOTGUN',
        'P40'
    ];
    DEFAULT_SIGHTS = [
        'Trij',
        'SLT',
        'XXX',
        'DP',
        'P40'
    ];
    rankings = [
        {
            name: 'Josh Monty',
            score:'69,343',
            pic:'assets/ranking-profile-pic/1.jpeg',
            flag:'assets/flags/usa.png',
            hits:323,
            misses:23,
        },
        {
            name: 'Yair Cohen',
            score:'64,122',
            pic:'assets/ranking-profile-pic/2.jpg',
            flag:'assets/flags/israel.png',
            hits:289,
            misses:45,
        },
        {
            name: 'Pier Cordova',
            score:'62,269',
            pic:'assets/ranking-profile-pic/3.jpg',
            flag:'assets/flags/france.png',
            hits:275,
            misses:44,
        },
        {
            name: 'Rick Smith',
            score:'60,429',
            pic:'assets/ranking-profile-pic/4.jpg',
            flag:'assets/flags/usa.png',
            hits:263,
            misses:47,
        },
        {
            name: 'Avi Levi',
            score:'59,389',
            pic:'assets/ranking-profile-pic/5.jpg',
            flag:'assets/flags/israel.png',
            hits:244,
            misses:39,
        },
    ]
    constructor(private apiService: ApiService) {
        this.initData();
        this.trySyncData();
    }


    trySyncData() {

    }


    initData() {
        let storageData = localStorage.getItem(this.DATA_NAME) as any;
        if (!storageData) {
            localStorage.setItem(this.DATA_NAME, JSON.stringify({}));
            storageData = localStorage.getItem(this.DATA_NAME) as any;
        }
        storageData = JSON.parse(storageData);
        this.setItem('homeData', storageData);
        this.data = storageData;
    }


    getItem(key?: string): any {
        const val = localStorage.getItem(key);
        return JSON.parse(val);
    }


    setItem(key: string, value: any) {
        if (!this.data) {
            this.data = {};
        }
        this.data[key] = value;
        localStorage.setItem(key, JSON.stringify(value));
        if(key === 'ble'){
            this.notifyTargetListChanged.next(value);
        }
    }


    passhistoricalTrainingsDate(data) {
        this.historicalTrainingsDate$.next(data);
    }

    passTrainingsInDate(data) {
        this.passTrainingsInDate$.next(data);
    }

    private handleMockData() {
        this.setItem('homeData', this.DEFAULT_DATA);
        this.data = this.DEFAULT_DATA;
    }
}


// storageData.homeData = {
//     hitRatioChart: {data: [[65, 35]]},
//     rateOfFireChart: {
//         chartData: [{data: [65, 59, 80, 81, 56, 55, 40]}],
//         chartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
//     },
//     trainingHistory: this.TEMP_TRAINING_HISTORY,
//     bestScores: {
//         longestShot: 1250,
//         avgSplit: 2.5,
//         avgDistance: 3,
//         lastShooting: new Date()
//     }
// };
