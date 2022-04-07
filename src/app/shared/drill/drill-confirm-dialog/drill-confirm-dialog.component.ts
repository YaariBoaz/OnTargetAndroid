import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-drill-confirm-dialog',
    templateUrl: './drill-confirm-dialog.component.html',
    styleUrls: ['./drill-confirm-dialog.component.scss'],
})
export class DrillConfirmDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DrillConfirmDialogComponent>,) {
    }

    ngOnInit() {
    }

    onClose(num) {
        this.dialogRef.close({status: num});
    }

}
