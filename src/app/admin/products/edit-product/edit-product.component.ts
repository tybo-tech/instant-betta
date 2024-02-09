import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products, initProducts } from 'src/schema';
import { ProductService } from 'src/services/ProductService';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  product?: Products;
  companyId = 0;
  productId = 0;

  constructor(
    private productService: ProductService,
    private r: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((r) => {
      this.companyId = r['companyId'] || 0;
      this.productId = r['productId'] || 0;
      productService.getProduct(this.productId).subscribe((data) => {
        this.product = data;
      });
    });
  }

  updateProduct() {
    if (!this.product) return;
    this.product.campany_id = this.companyId;
    this.productService.updateProduct(this.product).subscribe(
      (response) => {
        this.r.navigate(['/admin/product/',this.product?.campany_id, this.product?.id])
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
    return `/admin/product/${this.companyId}/${this.product?.id}`;
  }
}
