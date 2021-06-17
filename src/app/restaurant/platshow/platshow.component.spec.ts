import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatshowComponent } from './platshow.component';

describe('PlatshowComponent', () => {
  let component: PlatshowComponent;
  let fixture: ComponentFixture<PlatshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
