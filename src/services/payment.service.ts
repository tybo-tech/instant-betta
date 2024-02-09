import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl =
    'https://editor.tybo.co.za/builder-api/api/payments/yoco.php';
  constructor(private http: HttpClient) {}

  makePayment(
    key: string,
    cancelUrl: string,
    successUrl: string,
    amount: string
  ): Observable<any> {
    //sk_test_960bfde0VBrLlpK098e4ffeb53e1
    return this.http.get(
      `${this.apiUrl}?key=${key}&cancelUrl=${cancelUrl}&successUrl=${successUrl}&amount=${Number(amount) * 100}`
    );
  }

  doPay(key: string, cancelUrl: string, successUrl: string, amount: string) {
    this.makePayment(key, cancelUrl, successUrl, amount).subscribe((data) => {
      if (data && data.redirectUrl) {
        window.location = data.redirectUrl;
      }
    });
  }

  getAddress(latitude: number, longitude: number) {
    const YOUR_API_KEY = 'AIzaSyAd_7TDEANElRfne8E2Goj3XNIAZFHkXCQ';
    return this.http.get<any>(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${YOUR_API_KEY}`
    );
  }
  getEmojis() {
    return this.http.get<{ slug: string; character: string }[]>(
      `https://emoji-api.com/emojis?access_key=d721d51df8122126b7181cfac1315860b4f3a04c`
    );
  }
}
