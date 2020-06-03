import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifformComponent } from './tarifform.component';

describe('TarifformComponent', () => {
  let component: TarifformComponent;
  let fixture: ComponentFixture<TarifformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
