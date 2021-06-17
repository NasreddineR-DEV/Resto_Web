import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TajineComponent } from './tajine.component';

describe('TajineComponent', () => {
  let component: TajineComponent;
  let fixture: ComponentFixture<TajineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TajineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
