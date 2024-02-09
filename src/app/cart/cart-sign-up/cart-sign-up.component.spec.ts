import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSignUpComponent } from './cart-sign-up.component';

describe('CartSignUpComponent', () => {
  let component: CartSignUpComponent;
  let fixture: ComponentFixture<CartSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartSignUpComponent]
    });
    fixture = TestBed.createComponent(CartSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
