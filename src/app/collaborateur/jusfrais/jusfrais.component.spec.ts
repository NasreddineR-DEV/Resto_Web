import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JusfraisComponent } from './jusfrais.component';

describe('JusfraisComponent', () => {
  let component: JusfraisComponent;
  let fixture: ComponentFixture<JusfraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JusfraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JusfraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
