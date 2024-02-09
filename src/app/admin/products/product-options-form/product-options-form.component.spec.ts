import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionsFormComponent } from './product-options-form.component';

describe('ProductOptionsFormComponent', () => {
  let component: ProductOptionsFormComponent;
  let fixture: ComponentFixture<ProductOptionsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductOptionsFormComponent]
    });
    fixture = TestBed.createComponent(ProductOptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
