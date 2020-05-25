import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashtypeComponent } from './crashtype.component';

describe('CrashtypeComponent', () => {
  let component: CrashtypeComponent;
  let fixture: ComponentFixture<CrashtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
