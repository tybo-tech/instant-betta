import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchemaModel } from 'src/app/shared/app-schema/SchemaModel';
import { api } from 'src/settings';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private apiUrl = `${api}/tables/add.php`;
  private apiList = `${api}/tables/list.php`;

  constructor(private http: HttpClient) {}

  createTable(tableData: any) {
    const headers = this.getHeaders();
    return this.http.post<SchemaModel[]>(this.apiUrl, tableData, { headers });
  }
  list() {
    const headers = this.getHeaders();
    return this.http.get<SchemaModel[]>(this.apiList);
  }
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Assuming you store the token in local storage
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }
}
