import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartHelper } from 'src/classes/CartHelper';
import { Orders, Users } from 'src/schema';
import { LoginService } from 'src/services/accounts/LoginService ';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit {
  order?: Orders;
  cartHelper = new CartHelper();
  user?: Users;
  constructor(private lo: LoginService) {
    lo.$user.subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }
  @Output() closeCart = new EventEmitter<any>();

  ngOnInit(): void {
    this.cartHelper.loadOrder();
    this.order = this.cartHelper.order;
  }

  closeWithOverlay(e: any) {
    if (e.target?.id === 'cart-modal') this.closeCart.emit();
  }
}
