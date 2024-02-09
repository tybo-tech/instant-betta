import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { initProducts, Products } from 'src/schema';
import { ProductService } from 'src/services/ProductService';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  product: Products = initProducts;
  companyId = 0;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private r: Router,

  ) {
    this.activatedRoute.params.subscribe(
      (r) => (this.companyId = r['companyId'] || '')
    );
  }

  addProduct() {
    this.product.campany_id = this.companyId;
    this.productService.addProduct(this.product).subscribe(
      (response) => {
        this.r.navigate(['/admin/product/',this.product?.campany_id, response?.id])

        console.log('Product added successfully:', response);
        // You can add further logic, e.g., redirect to product list page
      },
      (error) => {
        console.error('Error adding product:', error);
        // Handle errors as needed
      }
    );
  }
  get back() {
    return `/admin/restaurant-products/${this.companyId}`;
  }
}
