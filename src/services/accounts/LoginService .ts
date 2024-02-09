// src/app/login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { api } from 'src/settings';
import { Users, initUsers } from 'src/schema';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = `${api}/accounts/login.php`;
  private apiUrlRegister = `${api}/accounts/register.php`;
  private userKey = 'user';

  user = new BehaviorSubject<Users>(initUsers);
  $user = this.user.asObservable();

  constructor(private http: HttpClient) {
    const user = this.getUserSession();
    if (user) {
      this.updateUser(user);
    }
  }

  login(username: string, password: string): Observable<Users> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map((response) => {
        if (response && response.token) {
          return response;
        }

        throw new Error('Invalid credentials');
      }),
      catchError((error) => {
        console.error('Login failed:', error);
        return throwError('Authentication failed');
      })
    );
  }
  register(
    username: string,
    email: string,
    password: string,
    role: string,
    phoneNumber: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    dob: string,
    address: string,
    latitude: number,
    longitude: number,
    url: string
  ): Observable<Users> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      username,
      email,
      password,
      role,
      phone_number: phoneNumber,
      address_line_1: addressLine1,
      address_line_2: addressLine2,
      city,
      dob,
      address,
      latitude,
      longitude,
      url,
      metadata: {signUpDate: new Date()}
    };

    return this.http.post<any>(this.apiUrlRegister, body, { headers }).pipe(
      map((response) => {
        if (response && response.token) {
          return response;
        }

        throw new Error('Invalid credentials');
      }),
      catchError((error) => {
        console.error('Registration failed:', error);
        return throwError('Registration failed');
      })
    );
  }

  updateUser(user: Users) {
    const updatedUser = { ...user }; // Ensure immutability
    this.user.next(updatedUser);
    localStorage.setItem(this.userKey, JSON.stringify(updatedUser));
  }

  getUserSession(): Users | undefined {
    const user = localStorage.getItem(this.userKey);
    try {
      return user ? JSON.parse(user) : undefined;
    } catch (error) {
      console.error('Error parsing user session data:', error);
      return undefined;
    }
  }

  // Add a method to clear user data and token from local storage
  clearUserData() {
    this.user.next(initUsers);
    localStorage.removeItem(this.userKey);
  }
}
