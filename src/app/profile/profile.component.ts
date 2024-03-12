import { Component, OnInit } from '@angular/core';
import {StorageService} from '../shared/services/storage.service';
import {DashboardService} from '../dashboard/dashboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(public storageService:StorageService,public dashboardService:DashboardService) { }

  ngOnInit() {}

}
