import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataddComponent } from './platadd.component';

describe('PlataddComponent', () => {
  let component: PlataddComponent;
  let fixture: ComponentFixture<PlataddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlataddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
