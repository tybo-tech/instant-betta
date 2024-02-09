import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forms } from 'src/forms';
import { IReportCount } from 'src/report.model';
import { initCompanies } from 'src/schema';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { filterForms } from 'src/utils.functions';
import { IKeyValue } from 'src/utils.models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  counts: IReportCount[] = [
    {
      Icon: 'bi bi-inboxes',
      Name: 'Menu items',
      Value: '67',
      Link: 'products',
    },
    { Icon: 'bi bi-cart-plus', Name: 'New Orders', Value: '05' },
    { Icon: 'bi bi-cart', Name: 'In Progress', Value: '03' },
  ];
  counts2: IReportCount[] = [
    { Icon: 'bi bi-rocket-takeoff', Name: 'On The Way', Value: '08' },
    { Icon: 'bi bi-clipboard2-check', Name: 'Completed', Value: '67' },
  ];
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
  model = forms.companies;
  formConfig = filterForms(forms.companies);
  init: any = initCompanies;
  pageId: string | number = '';
  mode: 'add' | 'edit' = 'add';
  data: any;
  constructor(
    private crudService: CrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((r) => (this.pageId = r['id'] || ''));
  }
  ngOnInit(): void {
    if (this.pageId === 'add') {
      this.mode = 'add';
      this.bread.push({
        key: 'Add restaurant',
        value: '/admin/restaurants/add',
      });
    } else {
      this.mode = 'edit';
      this.bread.push({
        key: 'View restaurant',
        value: '/admin/restaurants/' + this.pageId,
      });
      this.get();
    }
  }
  get() {
    this.crudService
      .get('companies', this.pageId as number)
      .subscribe((data) => {
        this.data = data;
      });
  }

  onSubmit(formData: any[]) {
    this.init = initCompanies;
    formData.forEach((data: any) => {
      if (data.label) this.init[this.cleanLAbel(data.label)] = data.value;
    });
    this.addItem();
  }
  cleanLAbel(label: string) {
    return label.toLowerCase().replace(' ', '_').trim();
  }
  addItem() {
    delete this.init.created_at;
    delete this.init.updated_at;
    delete this.init.updated_at;
    this.crudService.add('add', 'companies', this.init).subscribe(
      (data) => {
        console.log('Item added:', data);
        this.back();
      },
      (error) => console.error('Error adding item:', error)
    );
  }
  back() {
    this.router.navigate(['/admin/restaurants']);
  }
  get isAdd() {
    return this.mode === 'add';
  }
  onCountEVent(item: IReportCount) {
    item.Link === 'products' &&
      this.router.navigate(['/admin/restaurant-products', this.pageId]);
  }
}
