import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {HitNohitService} from '../../drill/hit-nohit.service';

@Injectable({
    providedIn: 'root'
})
export class ShootingService {
    selectedDrill;
    zeroTable;
    challenge;
    isChallenge;
    challengeId;
    numberOfBullersPerDrill: number;
    BaseUrl;
    private isZero: boolean;
    targets;
    targetsArrived = new BehaviorSubject(null);
    chosenTarget: any;

    drillStarteEvent = new BehaviorSubject(null);
    caliber: string;
    bulletName;
    sightsZeroing: any;
    calibers: any;
    weapons: any;
    isTargetConnected = false;
    isInDrill  = new Subject();
    selectedTarget: any;

    constructor(private http: HttpClient) {
    }


    getMOABySight(): number {
        const signName = this.selectedDrill.sight;
        let moa = 0.6;
        this.sightsZeroing.forEach(sight => {
            if (sight.name === signName) {
                moa = sight.moa;
            }
        });
        return moa;
    }


    setIsZero(flag) {
        this.isZero = flag;
    }

    getIsZero() {
        return this.isZero;
    }


    setBestResults() {
        const data = JSON.parse(localStorage.getItem('activityHistory'))
        this.setFastestShootingSession(data);
        this.setFastestSplitTimeSession(data);
        this.setHitRatio(data);
        console.log(data);
    }
    setFastestShootingSession(data){
        let fastestTime = localStorage.getItem('fastestSession')
        if(!fastestTime) {
            fastestTime = '99:99.99';
        }
        Object.keys(data).forEach(key =>{
            const session = data[key];
            if(fastestTime > session.summaryObject.totalTime){
                fastestTime = session.summaryObject.totalTime;
            }
        })
        localStorage.setItem('fastestSession',fastestTime);
    }
    setFastestSplitTimeSession(data) {
        let fastestSplitTime = localStorage.getItem('fastestSplitTime')
        if(!fastestSplitTime) {
            fastestSplitTime = '99:99.99';
        }
        Object.keys(data).forEach(key =>{
            const session = data[key];
            if(fastestSplitTime > session.summaryObject.split){
                fastestSplitTime = session.summaryObject.split;
            }
        })
        localStorage.setItem('fastestSplitTime',fastestSplitTime);

    }
    setHitRatio(data: any) {
        let hitRatio = localStorage.getItem('hitRatio')
        if(!hitRatio) {
            hitRatio = '0';
        }
        let hits =  0;
        let bullets = 0;
        Object.keys(data).forEach(key =>{
            const session = data[key];
            bullets+= session.drill.numOfBullets;
            hits+= (session.summaryObject.points / 2);
        })
        localStorage.setItem('hitRatio',hits / bullets * 100+'%');
    }
}












