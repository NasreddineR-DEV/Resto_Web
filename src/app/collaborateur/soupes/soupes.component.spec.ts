import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupesComponent } from './soupes.component';

describe('SoupesComponent', () => {
  let component: SoupesComponent;
  let fixture: ComponentFixture<SoupesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoupesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
