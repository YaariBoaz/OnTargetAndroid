import {Component, OnInit} from '@angular/core';
import {ChallengesService} from './challenges.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ChallengeListComponent} from './List/challenge-list.component';
import {ShootingService} from '../services/shooting.service';
import {Router} from '@angular/router';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {BleService} from '../services/ble.service';

@Component({
    selector: 'app-activity-log',
    templateUrl: './choose-drill.component.html',
    styleUrls: ['./choose-drill.component.scss'],
})
export class ChooseDrillComponent implements OnInit {
    tabs = [
        {
            name:'Challenges',
            background:'assets/share-bg2.jpg'
        },
        {
            name:'Custom Drill',
            background:'assets/share-bg2.jpg'
        },
        {
            name:'Personal Trainer',
            background:'assets/share-bg2.jpg'
        },
        {
            name:'Competitions',
            background:'assets/share-bg2.jpg'
        }
    ]
    currentTab = 1;
    selectedTab = this.tabs[1].name;

    devices: any;
    isGatewayConnected = false;
    selectedTargetName = null ;

    constructor(private challengesService: ChallengesService,
                public dialog: MatDialog,
                private screenOrientation:ScreenOrientation,
                private shootingService: ShootingService,
                private bleService:BleService,
                private router: Router) {
            // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE).then();
    }

    ngOnInit() {
    this.bleService.notifyConnectedToGateway.subscribe(flag => this.isGatewayConnected = flag);
    }


    onBuildDrillClicked() {
        this.router.navigateByUrl('/custom-drill/select');
    }

    onBackPressed() {
        this.router.navigateByUrl('/home');
    }

    onTabSelected(selectedTab){
    }

    scanForGateway() {
        this.bleService.scan();
    }

    onTargetSelected($event: any) {
        this.selectedTargetName = $event.name;
    }
}
