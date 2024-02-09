import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from 'src/schema';
import { api } from 'src/settings';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = `${api}/orders`;

  constructor(private http: HttpClient) {}

  save(order: Orders): Observable<Orders> {
    if (order.created_at && order.id) return this.update(order);
    order.restaurant_id = 8;
    const url = `${this.apiUrl}/add.php`;
    return this.http.post<Orders>(url, order);
  }

  get(productId: number): Observable<Orders> {
    const url = `${this.apiUrl}/get.php?id=${productId}`;
    return this.http.get<Orders>(url);
  }

  list(): Observable<Orders[]> {
    const url = `${this.apiUrl}/list.php`;
    return this.http.get<Orders[]>(url);
  }

  update(product: Orders): Observable<Orders> {
    const url = `${this.apiUrl}/update.php`;
    return this.http.post<Orders>(url, product);
  }
  calcDistance(order: Orders) {
    if (order.metadata.customer) {
      const from = new google.maps.LatLng(
        Number(order.metadata.customer.latitude),
        Number(order.metadata.customer.longitude)
      );
      const to = new google.maps.LatLng(
        Number(order.metadata.latitude),
        Number(order.metadata.longitude)
      );
      const distance = (
        google.maps.geometry.spherical.computeDistanceBetween(from, to) / 1000
      ).toFixed(2);
      order.metadata.distance = Math.ceil(Number(distance)) || 0;
    }
  }
}
