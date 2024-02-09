// src/app/crud.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from 'src/settings';
import { IDbInclude } from 'src/utils.models';
import { Companies } from 'src/schema';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl = `${api}/operations/run.php`; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Assuming you store the token in local storage
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  add(operation: string, table: string, data: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(this.apiUrl, { operation, table, data });
  }

  get(table: string, id: number, includes: IDbInclude[] = []): Observable<any> {
    const headers = this.getHeaders();
    const operation = 'get';
    return this.http.post<any>(this.apiUrl, {
      operation,
      table,
      data: { id, includes },
    });
  }
  getChildren(table: string, id: number, col: string): Observable<any> {
    const headers = this.getHeaders();
    const operation = 'get-children';
    return this.http.post<any>(this.apiUrl, {
      operation,
      table,
      data: { id, col },
    });
  }

  update(
    table: string,
    id: number,
    data: any
  ): Observable<any> {
    const headers = this.getHeaders();
    const operation = 'update'
    return this.http.post<any>(this.apiUrl, {
      operation,
      table,
      data: { id, ...data },
    });
  }

  delete(table: string, id: number) {
    const headers = this.getHeaders();
    const operation = 'delete';
    if (confirm(table + ' will be deleted.')) {
      this.http
        .post<any>(this.apiUrl, { operation, table, data: { id } })
        .subscribe();
    }
  }

  list(table: string): Observable<any[]> {
    const headers = this.getHeaders();
    const operation = 'list';
    return this.http.post<any[]>(this.apiUrl, { operation, table, data: {} });
  }
  radius(
    latitude: number,
    longitude: number,
    radius: number
  ): Observable<Companies[]> {
    const headers = this.getHeaders();
    const operation = 'radius';
    const table = 'companies';
    return this.http.post<any[]>(this.apiUrl, {
      operation,
      table,
      data: { latitude, longitude, radius },
    });
  }
}
