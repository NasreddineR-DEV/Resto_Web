import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatesComponent } from './pates.component';

describe('PatesComponent', () => {
  let component: PatesComponent;
  let fixture: ComponentFixture<PatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
