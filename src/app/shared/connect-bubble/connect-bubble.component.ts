import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StorageService} from '../services/storage.service';
import {BleService} from '../services/ble.service';
import {GatewayService} from '../services/gateway.service';

@Component({
  selector: 'app-connect-bubble',
  templateUrl: './connect-bubble.component.html',
  styleUrls: ['./connect-bubble.component.scss'],
})
export class ConnectBubbleComponent implements OnInit {
 @Output() targetSelected = new EventEmitter();
  menuIsOpened = false;
  devices = [];
  selectedTarget = null;

  constructor(private storageService:StorageService,private bleService:BleService,private gateWayService:GatewayService) { }

  ngOnInit() {
    this.gateWayService.notifyTargetConnectedToGateway.subscribe(device =>{
      if(device){
        this.devices.push(device)
      }
    })
    this.bleService.notifyTargetConnected.subscribe((device)=>{
      if(device){
        this.devices.push(device);
      }
    })
  }
}
