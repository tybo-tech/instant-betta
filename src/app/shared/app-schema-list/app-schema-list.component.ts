import { Component, Input } from '@angular/core';
import { SchemaModel } from '../app-schema/SchemaModel';

@Component({
  selector: 'app-app-schema-list',
  templateUrl: './app-schema-list.component.html',
  styleUrls: ['./app-schema-list.component.scss']
})
export class AppSchemaListComponent {
@Input() tables: SchemaModel [] = []
}
