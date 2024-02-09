import { Component } from '@angular/core';
import { Users } from 'src/schema';
import { LoginService } from 'src/services/accounts/LoginService ';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  searchTerm = '';
  user?: Users;
  constructor(private loginService: LoginService) {
    loginService.$user.subscribe((data) => {
      this.user = data;
    });
  }
  applySearch() {}
}
