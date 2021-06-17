import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoksComponent } from './woks.component';

describe('WoksComponent', () => {
  let component: WoksComponent;
  let fixture: ComponentFixture<WoksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
