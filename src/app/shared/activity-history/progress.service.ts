import { Injectable } from '@angular/core';
import {TargetType} from '../drill/constants';
import {DrillType} from '../../custom-drill/custom-drill.page';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor() { }

  getHistory():Array<ProgressListItem>{
    const sessions =new Array<ProgressListItem>();
    const activityHistory = JSON.parse(localStorage.getItem('activityHistory'));
    Object.keys(activityHistory).forEach(key =>{
        const session = activityHistory[key];
        sessions.push({
          title: session.drill.title,
          numOfBullets: session.drill.numOfBullets,
          targetType: session.drill.targetType,
          bgId: session.drill.bgId,
          drillType:session.drill.drillType,
          challngeId: session.drill.challngeId,
          distance: session.drill.distance,
          points: session.summaryObject.points,
          totalTime:  session.summaryObject.totalTime,
          shots: session.stats
        })
    })
    return sessions;
  }
}
export  interface ProgressListItem{
  title:string;
  numOfBullets: number;
  targetType: TargetType;
  bgId: number;
  challngeId: number;
  distance: number;
  points: number;
  totalTime:string;
  rawHitsLocation?:any
  openShowMore?:boolean;
  drillType:DrillType;
  shots: [];
}
