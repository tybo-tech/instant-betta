import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartQtyComponent } from './cart-qty.component';

describe('CartQtyComponent', () => {
  let component: CartQtyComponent;
  let fixture: ComponentFixture<CartQtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartQtyComponent]
    });
    fixture = TestBed.createComponent(CartQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
