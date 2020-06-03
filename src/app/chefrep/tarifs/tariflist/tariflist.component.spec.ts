import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TariflistComponent } from './tariflist.component';

describe('TariflistComponent', () => {
  let component: TariflistComponent;
  let fixture: ComponentFixture<TariflistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariflistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
