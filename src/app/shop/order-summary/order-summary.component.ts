import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartHelper } from 'src/classes/CartHelper';
import { Orders } from 'src/schema';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent {
  @Input() order?: Orders;
  @Input() cartHelper = new CartHelper();
  @Output() closeCart = new EventEmitter<any>();

  ngOnInit(): void {
    this.cartHelper.loadOrder();
    this.order = this.cartHelper.order;
  }

  closeWithOverlay(e: any) {
    if (e.target?.id === 'cart-modal') this.closeCart.emit();
  }
}
