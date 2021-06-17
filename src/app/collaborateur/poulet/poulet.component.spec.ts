import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PouletComponent } from './poulet.component';

describe('PouletComponent', () => {
  let component: PouletComponent;
  let fixture: ComponentFixture<PouletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PouletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PouletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
