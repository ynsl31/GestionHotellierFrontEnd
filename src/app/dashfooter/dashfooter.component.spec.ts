import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashfooterComponent } from './dashfooter.component';

describe('DashfooterComponent', () => {
  let component: DashfooterComponent;
  let fixture: ComponentFixture<DashfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
