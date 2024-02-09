import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartHelper } from 'src/classes/CartHelper';
import { Users } from 'src/schema';
import { LoginService } from 'src/services/accounts/LoginService ';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
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
      email: ['', [Validators.required]],
      phone_number: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password, phone_number, email } = this.loginForm.value;
      this.loginService
        .register(
          username,
          email,
          password,
          'customer',
          phone_number,
          '',
          '',
          '',
          '',
          '',
          0,
          0,
          ''
        )
        .subscribe(
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
