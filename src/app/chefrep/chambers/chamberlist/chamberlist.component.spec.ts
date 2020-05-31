import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberlistComponent } from './chamberlist.component';

describe('ChamberlistComponent', () => {
  let component: ChamberlistComponent;
  let fixture: ComponentFixture<ChamberlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamberlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
