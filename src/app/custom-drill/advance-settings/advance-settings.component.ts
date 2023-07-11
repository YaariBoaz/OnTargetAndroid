import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData, DrillObject} from '../custom-drill.page';

@Component({
  selector: 'app-advance-settings',
  templateUrl: './advance-settings.component.html',
  styleUrls: ['./advance-settings.component.scss'],
})
export class AdvanceSettingsComponent implements OnInit {
  drill:DrillObject;
  myGuns:[]
  mySights:[]
  myAmmo:[]
  constructor(public dialogRef: MatDialogRef<AdvanceSettingsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.drill = data.drill;
    this.myGuns = data.myGuns;
    this.mySights = data.mySights;
    this.myAmmo = data.myAmmo;
  }

  ngOnInit() {}

  onSave() {
    this.dialogRef.close();
  }
}
