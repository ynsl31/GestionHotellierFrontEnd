import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureformComponent } from './factureform.component';

describe('FactureformComponent', () => {
  let component: FactureformComponent;
  let fixture: ComponentFixture<FactureformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
