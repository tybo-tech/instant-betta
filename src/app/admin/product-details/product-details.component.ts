import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartHelper } from 'src/classes/CartHelper';
import { ICartOptions } from 'src/classes/cart.models';
import {
  Companies,
  Products,
  Users,
  initOrder_items,
  initOrders,
} from 'src/schema';
import { OrderService } from 'src/services/CrudService.ts/OrderService';
import { LoginService } from 'src/services/accounts/LoginService ';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() product?: Products;
  @Input() longitude?: number;
  @Input() restaurant?: Companies;
  @Input() latitude?: number;
  @Input() role = 'customer';
  cartOptions: ICartOptions = { quantity: 1, options: [] };

  quantity = 1;
  showCart = false;
  user?: Users;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private orderService: OrderService
  ) {
    loginService.$user.subscribe((data) => {
      this.user = data;
    });
  }
  get edit() {
    return `/admin/edit-product/${this.product?.campany_id}/${this.product?.id}`;
  }
  addToCart() {
    if (this.product) {
      const cart = new CartHelper();
      cart.addToCart(this.cartOptions, this.product);
      if (this.user) {
        cart.onCustomerChange(this.user);
      }
      if (this.restaurant) {
        cart.setCompanyInfo(
          this.restaurant.latitude,
          this.restaurant.longitude,
          this.product.campany_id
        );
      }
      this.showCart = true;
      const order = cart.order;
      if (order) {
        this.orderService.calcDistance(order);
        cart.saveOrder();
        console.log(order);
      }
    }
  }
}
