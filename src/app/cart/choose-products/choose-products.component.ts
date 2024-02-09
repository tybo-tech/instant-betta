import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Companies, Products } from 'src/schema';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { IKeyValue, IDbInclude } from 'src/utils.models';

@Component({
  selector: 'app-choose-products',
  templateUrl: './choose-products.component.html',
  styleUrls: ['./choose-products.component.scss'],
})
export class ChooseProductsComponent {
  latitude: number | string = '';
  longitude: number | string = '';
  list?: Products[];
  companyId: string | number = '';
  restaurant?: Companies;
  constructor(
    private crudService: CrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((r) => {
      this.companyId = r['companyId'] || '';
      this.longitude = r['longitude'] || '';
      this.latitude = r['latitude'] || '';
    });
  }
  ngOnInit(): void {
    this.get();
  }

  get() {
    const includes: IDbInclude[] = [
      { columnName: 'campany_id', tableName: 'products' },
    ];
    this.crudService
      .get('companies', this.companyId as number, includes)
      .subscribe(
        (data) => {
          if (data && data.products) {
            this.restaurant = data;
            this.list = data.products;
            this.list?.forEach((item) => {
              // item.link = `/choose-options/${item.campany_id}/${item.id}`;
              item.link = `/choose-options/${this.latitude}/${this.longitude}/${item.campany_id}/${item.id}`;
            });
          }
        },
        (error) => console.error('Error:', error)
      );
  }

  get backLink() {
    return `/search/${this.latitude}/${this.longitude}`;
  }
}
