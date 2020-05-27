import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashReceptionistComponent } from './dash-receptionist.component';

describe('DashReceptionistComponent', () => {
  let component: DashReceptionistComponent;
  let fixture: ComponentFixture<DashReceptionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashReceptionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
