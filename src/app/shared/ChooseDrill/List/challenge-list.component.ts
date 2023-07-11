import {Component, ElementRef, HostListener, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ChallengesService} from '../challenges.service';
import {Router} from '@angular/router';
import {ShootingService} from '../../services/shooting.service';
import {DrillType} from '../../../custom-drill/custom-drill.page';
import {TargetType} from '../../drill/constants';

@Component({
    selector: 'challenge-list',
    templateUrl: './challenge-list.component.html',
    styleUrls: ['./challenge-list.component.scss'],
})
export class ChallengeListComponent implements OnInit {
    bestResultSentence = 'Best Result Is: \n';
    activeTab = 'rifle';
    @HostListener('window:beforeunload')
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
                useHighestScore: false,
                dateCreated: '2022-01-12T10:44:55.431Z',
                isActive: true,
                bgId:1
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
                    bgId:2
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
                    bgId:3
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
                    bgId:4
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
                    bgId:5
                },
            }
        ],
        pistol: [],
    };
    challenges  = [];



constructor(private elementRef: ElementRef,
                private router: Router, private shootingService: ShootingService, private challengesService: ChallengesService) {

    }

    ionViewWillEnter() {
         this.optionsToRender.pistol = [];
        this.optionsToRender.rifle = [];
        // this.challengesService.getMyChallenges().subscribe(data => {
        //     this.challenges = data;
        //     this.challenges.forEach(item => {
        //         if (item.metadata.usePistol) {
        //             this.optionsToRender.pistol.push(item);
        //         } else {
        //             this.optionsToRender.rifle.push(item);
        //         }
        //     });
        // });
    }



    @HostListener('window:unload', ['$event'])
    unloadHandler(event) {
        this.elementRef.nativeElement.remove();
    }

    ngOnInit() {


    }

    onChallengeChosen(challenge: any) {
        if (challenge.metadata.drillType === 'HitNoHit') {
            challenge.metadata.drill = DrillType.HitNoHit;
            challenge.metadata.drillType = DrillType.HitNoHit;
        } else {
            challenge.metadata.drill = DrillType.Regular;
            challenge.metadata.drillType = DrillType.Regular;
        }
        this.setTargetType(challenge.metadata);
        challenge.metadata.numOfBullets = challenge.metadata.numberOfBullets;
        this.shootingService.drillStarteEvent.next(true);
        this.shootingService.isChallenge = true;
        this.shootingService.numberOfBullersPerDrill = challenge.metadata.numberOfBullets;
        this.shootingService.challengeId = challenge.metadata.challengeId;
        this.shootingService.selectedDrill = challenge.metadata;
        this.shootingService.selectedDrill.bg = this.shootingService.selectedDrill.bgId
        this.shootingService.challenge = challenge;
        this.router.navigateByUrl('drill');
    }

    setTargetType(challenge) {
        if (challenge.targetType === '003' || challenge.targetType.indexOf('64') > -1) {
            challenge.targetType = TargetType.Type_64;
        } else if (challenge.targetType.indexOf('128') > -1) {
            challenge.targetType = TargetType.Type_128;

        } else if (challenge.targetType.indexOf('16') > -1) {
            challenge.targetType = TargetType.Type_16;

        } else {
            challenge.targetType = TargetType.HitNoHit;
        }
    }

    setTargetTypeForFilter(name) {
        if (name === '003' || name.indexOf('64') > -1) {
            return TargetType.Type_64;
        } else if (name.indexOf('128') > -1) {
            return TargetType.Type_128;

        } else if (name.indexOf('16') > -1) {
            return TargetType.Type_16;

        } else {
            return TargetType.HitNoHit;
        }
    }

    private showDrill(targetType) {
        if (targetType === '003' || targetType.indexOf('64') > -1 || targetType.indexOf('128') > -1) {
            return true;
        } else if (targetType.indexOf('Hit') > -1) {
            return true;
        }
    }

    getBackgroundImage(item: any) {
        if (item.metadata.bgId === 1) {
            return 'url(assets/challenges/sodlier-avg-split.png)';
        } else if (item.metadata.bgId === 2) {
            return 'url(assets/challenges/soldier-againt-the-clock.png)';
        } else if (item.metadata.bgId === 3) {
            return 'url(assets/challenges/soldier-fast.png';
        }
        else if (item.metadata.bgId === 4) {
            return 'url(assets/challenges/soldier-shoot-fast.png';
        } else {
            return 'url(assets/challenges/soldier-score.png)';
        }
    }

    onBackPressed() {
        this.router.navigateByUrl('select-target');
    }
}

