import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturelistComponent } from './facturelist.component';

describe('FacturelistComponent', () => {
  let component: FacturelistComponent;
  let fixture: ComponentFixture<FacturelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
