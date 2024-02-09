import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { IKeyValue } from 'src/utils.models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  bread: IKeyValue[] = [
    {
      key: 'Admin',
      value: '/admin',
    },
    {
      key: 'Categories',
      value: '/admin/categories',
    },
  ];
  pageId = 'categories';
  tableHeaders: IKeyValue[] = [
    { key: 'image', value: 'image_url' },
    { key: 'text', value: 'name' },
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

  create() {
    this.router.navigate(['/admin', this.pageId, 'add']);
  }
}
