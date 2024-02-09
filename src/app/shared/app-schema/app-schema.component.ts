import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/services/TableService';
import { SchemaModel } from './SchemaModel';

@Component({
  selector: 'app-app-schema',
  templateUrl: './app-schema.component.html',
  styleUrls: ['./app-schema.component.scss'],
})
export class AppSchemaComponent implements OnInit {
  tableName: string = '';
  columns: { columnName: string; columnType: string; canDelete: boolean }[] = [
    {
      columnName: 'id',
      columnType: 'INT AUTO_INCREMENT PRIMARY KEY',
      canDelete: false,
    },
    {
      columnName: 'created_at',
      columnType: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
      canDelete: false,
    },
    {
      columnName: 'updated_at',
      columnType:
        'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
      canDelete: false,
    },
  ];
  headers = ['Coumn', 'Type'];
  list: SchemaModel[] = [];
  constructor(private tableService: TableService) {}
  ngOnInit(): void {
    this.tableService.list().subscribe((data) => {
      data.map((x) => (x.open = false));
      this.list = data || [];
    });
  }
  addColumn() {
    this.columns.push({ columnName: '', columnType: '', canDelete: true });
  }

  removeColumn(index: number) {
    this.columns.splice(index, 1);
  }

  onSubmit() {
    // Check if there are any empty "Column Name" or "Data Type" fields
    if (
      this.columns.some((column) => !column.columnName || !column.columnType)
    ) {
      console.log('Please fill in all "Column Name" and "Data Type" fields.');
      return;
    }

    const convertedData = {
      TableName: this.tableName,
      Columns: this.columns.reduce((acc: any, column: any) => {
        acc[column.columnName] = column.columnType;
        return acc;
      }, {}),
    };

    this.tableService.createTable(convertedData).subscribe((data) => {
      if(data&& data.length){
        data.map((x) => (x.open = false));
        this.list = data || [];
      }
    });
    // Call your service to create the table with the converted data
  }
}
