import { Component } from '@angular/core';
import { toggleNav } from 'src/utils.functions';
import { INav } from 'src/utils.models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  items: INav[] = [
    {
      name: 'Dashboard',
      link: '/admin/',
      roles: ['admin'],
      icon: 'bi bi-grid-1x2',
    },
    {
      name: 'Categories',
      link: '/admin/categories/',
      roles: ['admin'],
      icon: 'bi bi-files',
    },
    {
      name: 'Restaurants',
      link: '/admin/restaurants/',
      roles: ['admin'],
      icon: 'bi bi-buildings',
    },
    {
      name: 'Orders',
      link: '/admin/orders/',
      roles: ['admin'],
      icon: 'bi bi-cart',
    },
    {
      name: 'Customers',
      link: '/admin/customers/',
      roles: ['admin'],
      icon: 'bi bi-person-badge',
    },
    {
      name: 'Users',
      link: '/admin/users/',
      roles: ['admin'],
      icon: 'bi bi-people',
    },
    {
      name: 'Settings',
      link: '/admin/settings/',
      roles: ['admin'],
      icon: 'bi bi-gear',
    },
  ];
  logout: INav = {
    name: 'Logout',
    link: '',
    roles: ['admin'],
    icon: 'bi bi-box-arrow-in-left',
  };
  toggle() {
    toggleNav();
  }
}
