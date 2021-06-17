import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriedComponent } from './fried.component';

describe('FriedComponent', () => {
  let component: FriedComponent;
  let fixture: ComponentFixture<FriedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
