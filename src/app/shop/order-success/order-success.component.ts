import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartHelper } from 'src/classes/CartHelper';
import { Orders } from 'src/schema';
import { OrderService } from 'src/services/CrudService.ts/OrderService';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss'],
})
export class OrderSuccessComponent {
  orderId = '0';
  orderTotal: number = 0;
  cartHelper = new CartHelper();
  order?: Orders;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    // Retrieve order details from route parameters or service
    this.route.params.subscribe((params) => {
      this.orderId = params['orderId'];
      if (this.orderId && Number(this.orderId) > 0) {
        this.orderService.get(Number(this.orderId)).subscribe((data) => {
          data && data.created_at && data.id && this.cartHelper.replace(data);
          this.order = this.cartHelper.order;
        });
      }
    });
  }
}
