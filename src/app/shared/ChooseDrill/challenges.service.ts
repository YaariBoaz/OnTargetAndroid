import {Injectable} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {DrillType} from "../../custom-drill/custom-drill.page";
import {TargetType} from "../drill/constants";

@Injectable({
    providedIn: 'root'
})
export class ChallengesService {
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
    constructor(private api: ApiService, private userService: UserService) {
    }

    // getChallenges(): Observable<any> {
    //     return this.api.getChallenges();
    // }

    // getMyChallenges(): Observable<any> {
    //     return this.api.getMyChallenges(this.userService.getUserId());
    // }
}
