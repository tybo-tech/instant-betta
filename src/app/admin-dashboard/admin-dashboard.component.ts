import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IReportCount } from 'src/report.model';
import { Users } from 'src/schema';
import { LoginService } from 'src/services/accounts/LoginService ';
import { toggleNav } from 'src/utils.functions';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  user?: Users;

  constructor(private router: Router, private loginService: LoginService) {
   this.user = loginService.user.value;
    if (this.user?.role !== 'admin') {
      this.router.navigate([`/login`]);
    }
  }
  onCountEVent(item: IReportCount) {
    item.Link && this.router.navigate([`/admin/${item.Link}`]);
  }
  toggle() {
    toggleNav();
  }
}
