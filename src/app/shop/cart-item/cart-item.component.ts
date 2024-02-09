import { Component, Input } from '@angular/core';
import { CartHelper } from 'src/classes/CartHelper';
import { OrderItems } from 'src/classes/cart.models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() item?: OrderItems;
  @Input() canEdit = true;
  @Input() cartHelper?: CartHelper;
}
