import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { forms } from 'src/forms';
import { IReportCount } from 'src/report.model';
import { Companies, initCompanies, Products } from 'src/schema';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { ProductService } from 'src/services/ProductService';
import { filterForms } from 'src/utils.functions';
import { IDbInclude } from 'src/utils.models';

@Component({
  selector: 'app-choose-options',
  templateUrl: './choose-options.component.html',
  styleUrls: ['./choose-options.component.scss'],
})
export class ChooseOptionsComponent {
  model = forms.products;
  formConfig = filterForms(forms.products);
  init: any = initCompanies;
  companyId: string | number = '';
  productId: string | number = '';
  data?: Products;
  longitude = 0;
  latitude = 0;
  restaurant?: Companies;
  constructor(
    private crudService: ProductService,
    private crud: CrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((r) => {
      this.companyId = r['companyId'] || '';
      this.productId = r['productId'] || '';
      this.longitude = r['longitude'] || 0;
      this.latitude = r['latitude'] || 0;
    });
  }
  ngOnInit(): void {
    this.getProduct();
  }

  getCompany() {
    this.crud.get('companies', this.companyId as number).subscribe(
      (data) => {
        if (data) {
          this.restaurant = data;
        }
      },
      (error) => console.error('Error:', error)
    );
  }
  getProduct() {
    this.crudService.getProduct(this.productId as number).subscribe((data) => {
      this.data = data;
      this.getCompany();
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
  get backUrl() {
    return `/choose-products/${this.latitude}/${this.longitude}/${this.companyId}`;
  }
}
