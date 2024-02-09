// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartHelper } from 'src/classes/CartHelper';
import { Users } from 'src/schema';
import { LoginService } from 'src/services/accounts/LoginService ';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showError = false;
  errorMessage = '';
  cartHelper = new CartHelper();

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.loginService.login(username, password).subscribe(
        (user) => {
          this.loginService.updateUser(user);
          user.role === 'admin' && this.router.navigate(['/admin/']);
          if (user.role === 'customer') {
            this.afterCustomerLogin(user);
          }
        },
        (error) => {
          console.error(error);
          this.showError = true;
          this.errorMessage = error;
        }
      );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
  afterCustomerLogin(user: Users) {
    this.cartHelper.loadOrder();
    const data = this.cartHelper.order;
    if (data && data.items && data.items.length) {
      data.metadata.customer = user;
      this.cartHelper.replace(data);
      this.router.navigate(['/checkout/']);
    } else {
      this.router.navigate(['/find-restaurants/']);
    }
  }
}
