import { Component } from '@angular/core';
import { Users } from 'src/schema';
import { LoginService } from 'src/services/accounts/LoginService ';
import { toggleNav } from 'src/utils.functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'starter';
  user?: Users;
  constructor(private loginService: LoginService) {
    loginService.$user.subscribe((data) => {
      this.user = data;
    });
  }
  toggle() {
    toggleNav();
  }
}
