import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberformComponent } from './chamberform.component';

describe('ChamberformComponent', () => {
  let component: ChamberformComponent;
  let fixture: ComponentFixture<ChamberformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamberformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamberformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
