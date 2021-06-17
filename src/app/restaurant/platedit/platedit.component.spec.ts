import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateditComponent } from './platedit.component';

describe('PlateditComponent', () => {
  let component: PlateditComponent;
  let fixture: ComponentFixture<PlateditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
