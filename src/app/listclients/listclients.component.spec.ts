import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclientsComponent } from './listclients.component';

describe('ListclientsComponent', () => {
  let component: ListclientsComponent;
  let fixture: ComponentFixture<ListclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
