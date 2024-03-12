import {Injectable} from '@angular/core';
import {ChallengesService} from '../shared/ChooseDrill/challenges.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor() {
    }
    getHitRatio(){
        const arr  = this.getTrains();
        if(arr){
         const hits = this.getTotalHits(arr);
         const shots = this.getTotalBullets(arr);
            return {
                // tslint:disable-next-line:radix
                percent :Math.round((100 * hits) / shots),
                text: Math.round((100 * hits) / shots)+'%'
            }
        }
        else{
            return {
                // tslint:disable-next-line:radix
                percent : 0,
                text: 0
            }
        }

    }
    getFastestTime(){
        return localStorage.getItem('fastestSession');
    }
    getFastestSplitTime(){
        return localStorage.getItem('fastestSplitTime');
    }
    getTotalSecondsPerSession(totalTime) {
        let  totalSeconds = 0;
        const arrayMinutesAndSeconds = totalTime.split(':');
        if(arrayMinutesAndSeconds[0] !== '00'){
            // tslint:disable-next-line:radix
            totalSeconds+= parseInt(arrayMinutesAndSeconds) * 60;
        }
        const secondsAndMilli = arrayMinutesAndSeconds[1].split('.');
        // tslint:disable-next-line:radix
        totalSeconds+=parseInt(secondsAndMilli[0])
        return totalSeconds;
    }
    getTotalHitsPerSession(points) {
        return points / 2;
    }
    getTotalMissPerSession(numOfBullets, points) {
        return numOfBullets - (points / 2);
    }
    getTotalHits(trains: any[]):number {
        if(!trains){
            return 0;
        }
        let sum = 0;
        trains.forEach(train =>{
            sum+= train.summaryObject.points / 2;
        })
        return sum;
    }
    getTotalScore(trains: any[]):number {
        if(!trains){
            return 0;
        }
        let sum = 0;
        trains.forEach(train =>{
            sum+= train.summaryObject.points;
        })
        return sum;
    }
    getTotalBullets(trains: any[]):number {
        if(!trains){
            return 0;
        }
        let sum = 0;
        trains.forEach(train =>{
            sum+= train.drill.numOfBullets;
        })
        return sum;
    }

    getTrains() {
        const arr  = JSON.parse(localStorage.getItem('activityHistory'))
        const trains  = []
        if(arr){
            Object.keys(arr).forEach(key =>{
                trains.push({date:new Date(parseInt(key)),...arr[key]})
            });
            trains.reverse()
            return trains;
        }
        return [];
    }


    getTotalPoints() {
        const arr = this.getTrains();
        let points = 0;
        if(!arr){
            return 0;
        }else{
            arr.forEach(item =>{
                points+=item.summaryObject.points;
            })
        }
        return points;
    }
}
