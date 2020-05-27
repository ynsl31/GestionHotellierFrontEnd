import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChefreceptionistComponent } from './dash-chefreceptionist.component';

describe('DashChefreceptionistComponent', () => {
  let component: DashChefreceptionistComponent;
  let fixture: ComponentFixture<DashChefreceptionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashChefreceptionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashChefreceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
