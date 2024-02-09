import { Component, Input } from '@angular/core';
import { LoginService } from 'src/services/accounts/LoginService ';
import { toggleNav } from 'src/utils.functions';
import { INav } from 'src/utils.models';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input() item?: INav;
  constructor(private l : LoginService){}
  toggle() {
    toggleNav();
  }
  logout(){
    this.l.clearUserData();
    location.href = '/';
  }
}
