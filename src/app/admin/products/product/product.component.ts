import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forms } from 'src/forms';
import { IReportCount } from 'src/report.model';
import { Products, initCompanies, initProducts } from 'src/schema';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { ProductService } from 'src/services/ProductService';
import { filterForms } from 'src/utils.functions';
import { IKeyValue } from 'src/utils.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  bread: IKeyValue[] = [
    {
      key: 'Admin',
      value: '/admin',
    },
    {
      key: 'Restaurants',
      value: '/admin/restaurants',
    },
  ];
  model = forms.products;
  formConfig = filterForms(forms.products);
  init: any = initCompanies;
  companyId: string | number = '';
  productId: string | number = '';
  data?: Products;
  constructor(
    private crudService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((r) => {
      this.companyId = r['companyId'] || '';
      this.productId = r['productId'] || '';
    });
  }
  ngOnInit(): void {
this.getProduct()
  }

  getProduct() {
    this.crudService
      .getProduct(this.productId as number)
      .subscribe((data) => {
        this.data = data;
      });
  }

  cleanLAbel(label: string) {
    return label.toLowerCase().replace(' ', '_').trim();
  }

  back() {
    this.router.navigate(['/admin/restaurant-products/', this.companyId]);
  }

  onCountEVent(item: IReportCount) {
    item.Link === 'products' &&
      this.router.navigate(['/admin/restaurant-products', this.companyId]);
  }
  get backUrl(){
    return `/admin/restaurant-products/${this.companyId}`
  }
}
