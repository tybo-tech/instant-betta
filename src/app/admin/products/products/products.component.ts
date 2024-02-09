import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Companies, Products } from 'src/schema';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { IDbInclude, IKeyValue } from 'src/utils.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  bread?: IKeyValue[]
  pageId = 'products';
  tableHeaders: IKeyValue[] = [
    { key: 'image', value: 'image_url', label: 'Image' },
    { key: 'text', value: 'name' },
    { key: 'text', value: 'price' },
  ];
  tableData?: any[];
  companyId: string | number = '';
  parent: any;
  constructor(
    private crudService: CrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(
      (r) => (this.companyId = r['id'] || '')
    );
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
            this.parent = data;
            this.tableData = data.products;
            this.loadBread(data);
          }
        },
        (error) => console.error('Error:', error)
      );
  }
  loadBread(data: Companies) {
    this.bread = [
      {
        key: 'Admin',
        value: '/admin',
      },
      {
        key: 'Restaurants',
        value: '/admin/restaurants',
      },
      {
        key: data.name,
        value: `/admin/restaurants/${this.companyId}`,
      },
      {
        key: 'Menu Items',
        value: '/admin/products',
      },
    ];
  }

  delete(item: Products) {
    this.crudService.delete('products', item.id);
    this.tableData = undefined;
    setTimeout(() => {
      this.get();
    }, 100);
  }
  view(item: Products) {
    this.router.navigate(['/admin/product',this.companyId, item.id])
  }

  openDetailsPage() {
    this.router.navigate(['/admin/add-product',this.companyId])
  }
}
