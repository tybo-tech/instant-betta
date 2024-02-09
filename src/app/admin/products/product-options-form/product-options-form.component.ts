import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  Variations,
  Variation_options,
  Products,
  initVariation_options,
  initVariations,
  ProductOptions,
} from 'src/schema';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { ProductService } from 'src/services/ProductService';
import { IDbInclude } from 'src/utils.models';

@Component({
  selector: 'app-product-options-form',
  templateUrl: './product-options-form.component.html',
  styleUrls: ['./product-options-form.component.scss'],
})
export class ProductOptionsFormComponent {
  variations: Variations[] = []; // Assuming you have a variations array
  variationOptions: Variation_options[] = []; // Assuming you have a variation options array
  productId = 0;
  product?: Products;
  constructor(
    private crudService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((r) => {
      this.productId = r['productId'] || '';
      this.productId && this.get();
    });
  }
  addVariationOption(variation: ProductOptions) {
    variation.options.push({ price: 0, value: '' });
  }
  addVariation() {
    const newOption: ProductOptions = {
      allowMultiple: false,
      name: '',
      options: [],
    };
    this.addVariationOption(newOption);
    this.product?.metadata?.variations?.push(newOption);
  }

  removeOption(variation: ProductOptions, index: number) {
    variation.options?.splice(index, 1);
  }

  get() {
    this.crudService.getProduct(this.productId as number).subscribe((data) => {
      this.product = data;
      if (!this.product.metadata?.variations) this.product.metadata = {variations:[]}
    });
  }
  save(){
    this.product && this.crudService.updateProduct(this.product).subscribe(data=>{
      this.router.navigate(['/admin/product/',this.product?.campany_id, this.product?.id])

    })
  }
  get back() {
    return `/admin/product/${this.product?.campany_id}/${this.product?.id}`;
  }
}
