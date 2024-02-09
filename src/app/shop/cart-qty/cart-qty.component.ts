import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-qty',
  templateUrl: './cart-qty.component.html',
  styleUrls: ['./cart-qty.component.scss']
})
export class CartQtyComponent {
  @Input() qty: number = 1;
  @Output() qtyChange = new EventEmitter<number>();

  incrementQty() {
    this.qty++;
    this.emitQty();
  }

  decrementQty() {
    if (this.qty > 1) {
      this.qty--;
      this.emitQty();
    }
  }

  private emitQty() {
    this.qtyChange.emit(this.qty);
  }
}
