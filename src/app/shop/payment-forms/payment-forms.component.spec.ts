import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormsComponent } from './payment-forms.component';

describe('PaymentFormsComponent', () => {
  let component: PaymentFormsComponent;
  let fixture: ComponentFixture<PaymentFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentFormsComponent]
    });
    fixture = TestBed.createComponent(PaymentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
