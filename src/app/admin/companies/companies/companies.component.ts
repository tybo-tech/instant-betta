import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Companies } from 'src/schema';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { IKeyValue } from 'src/utils.models';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {
  bread: IKeyValue[] = [
    {
      key: 'Admin',
      value: '/admin',
    },
    {
      key: 'Restaurants',
      value: '/admin/companies',
    },
  ];
  pageId = 'companies';
  tableHeaders: IKeyValue[] = [
    { key: 'image', value: 'logo' },
    { key: 'text', value: 'name' },
    { key: 'text', value: 'address' },
  ];
  tableData?: any[];
  constructor(private crudService: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.crudService.list(this.pageId).subscribe(
      (data) => (this.tableData = data || []),
      (error) => console.error('Error:', error)
    );
  }

  delete(item: Companies) {
    this.crudService.delete('companies', item.id);
    this.tableData = undefined;
    setTimeout(() => {
      this.getList()
    }, 100);
  }
  view(item: Companies) {
    this.openDetailsPage(item.id.toString())
  }

  openDetailsPage(id = 'add'){
    this.router.navigate(['/admin', 'restaurants', id]);
  }
}
