import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrillConfirmDialogComponent } from './drill-confirm-dialog.component';

describe('DrillConfirmDialogComponent', () => {
  let component: DrillConfirmDialogComponent;
  let fixture: ComponentFixture<DrillConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillConfirmDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrillConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
