import {Component} from '@angular/core';
import {ShootingService} from '../shared/services/shooting/shooting.service';


@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],

})
export class TabsPage {
    isInDrill = false;
    constructor(private shootingService:ShootingService) {
        this.shootingService.isInDrill.subscribe((flag:boolean) =>{
            this.isInDrill = flag;
        })
    }

}
