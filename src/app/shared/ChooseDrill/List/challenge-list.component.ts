import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {ChallengesService} from '../challenges.service';
import {Router} from '@angular/router';
import {ShootingService} from '../../services/shooting/shooting.service';
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
    challenges  = [];
    selectedChallenge = null;



constructor(private elementRef: ElementRef,
                private router: Router, private shootingService: ShootingService, public challengesService: ChallengesService) {

    }

    ionViewWillEnter() {
         this.challengesService.optionsToRender.pistol = [];
        this.challengesService.optionsToRender.rifle = [];
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
        this.selectedChallenge = challenge;
        challenge.metadata.numOfBullets = challenge.metadata.numberOfBullets;
        this.shootingService.drillStarteEvent.next(true);
        this.shootingService.isChallenge = true;
        this.shootingService.numberOfBullersPerDrill = challenge.metadata.numberOfBullets;
        this.shootingService.challengeId = challenge.metadata.challengeId;
        this.shootingService.selectedDrill = challenge.metadata;
        this.shootingService.selectedDrill.bg = this.shootingService.selectedDrill.bgId
        this.shootingService.challenge = challenge;
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
        this.router.navigateByUrl('select-target',{ replaceUrl: true });
    }

    startChallenge() {
        this.router.navigateByUrl('/activity/drill',{ replaceUrl: true });
    }
}

