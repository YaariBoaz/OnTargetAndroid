import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData, DrillObject} from '../tab2.page';

@Component({
  selector: 'app-advance-settings',
  templateUrl: './advance-settings.component.html',
  styleUrls: ['./advance-settings.component.scss'],
})
export class AdvanceSettingsComponent implements OnInit {
  drill:DrillObject;
  constructor(public dialogRef: MatDialogRef<AdvanceSettingsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,) {
    this.drill = data.drill;
  }

  ngOnInit() {}

}
