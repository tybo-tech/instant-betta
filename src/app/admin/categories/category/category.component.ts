import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forms } from 'src/forms';
import { initCategories } from 'src/schema';
import { CrudService } from 'src/services/CrudService.ts/CrudService';
import { filterForms } from 'src/utils.functions';
import { IKeyValue } from 'src/utils.models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  bread: IKeyValue[] = [
    {
      key: 'Admin',
      value: '/admin',
    },
    {
      key: 'categories',
      value: '/admin/categories',
    },
    {
      key: 'Add category',
      value: '/admin/categories/add',
    },
  ];
  formConfig = filterForms(forms.categories);
  model: any = initCategories;
  constructor(private crudService: CrudService, private router: Router) {}

  onSubmit(formData: any[]) {
    this.model = initCategories;
    formData.forEach((data: any) => {
      if (data.label) this.model[this.cleanLAbel(data.label)] = data.value;
    });
    this.addItem();
  }
  cleanLAbel(label: string) {
    return label.toLowerCase().replace(' ', '_').trim();
  }
  addItem() {
    delete this.model.created_at;
    delete this.model.updated_at;
    delete this.model.updated_at;
    this.crudService.add('add', 'categories', this.model).subscribe(
      (data) => {
        console.log('Item added:', data);
        this.back();
      },
      (error) => console.error('Error adding item:', error)
    );
  }
  back() {
    this.router.navigate(['/admin/categories']);
  }
}
