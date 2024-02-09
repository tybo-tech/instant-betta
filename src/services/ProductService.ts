import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from 'src/schema';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.instanteats.co.za/api/products';

  constructor(private http: HttpClient) { }

  addProduct(product: Products): Observable<Products> {
    const url = `${this.apiUrl}/add.php`;
    return this.http.post<Products>(url, product);
  }

  getProduct(productId: number): Observable<Products> {
    const url = `${this.apiUrl}/get.php?id=${productId}`;
    return this.http.get<Products>(url);
  }

  listProducts(): Observable<Products[]> {
    const url = `${this.apiUrl}/list.php`;
    return this.http.get<Products[]>(url);
  }

  updateProduct(product: Products): Observable<Products> {
    const url = `${this.apiUrl}/update.php`;
    return this.http.post<Products>(url, product);
  }

}
