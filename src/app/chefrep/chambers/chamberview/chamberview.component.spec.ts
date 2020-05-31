import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberviewComponent } from './chamberview.component';

describe('ChamberviewComponent', () => {
  let component: ChamberviewComponent;
  let fixture: ComponentFixture<ChamberviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamberviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamberviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
