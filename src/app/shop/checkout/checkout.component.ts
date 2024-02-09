import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartHelper } from 'src/classes/CartHelper';
import {
  RadioButtonInput,
  initCheckoutFormData,
} from 'src/classes/cart.models';
import { OrderService } from 'src/services/CrudService.ts/OrderService';
import { PaymentService } from 'src/services/payment.service';
import { UxService } from 'src/services/UxService';
import { BASE, ORDER_SUCESS, ORDER_CANCEL } from 'src/settings';
import { LoginService } from 'src/services/accounts/LoginService ';
import { Users, initUsers } from 'src/schema';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  initUsers = initUsers;
  cartHelper = new CartHelper();
  orderId = 0;
  payfast = {
    shopingSuccesfulUrl: '',
    paymentCallbackUrl: '',
    paymentCancelledUrl: '',
  };

  deliveryOptions: RadioButtonInput[] = [
    { value: 'pickup', label: '<i class="bi bi-person-walking"></i> Pick Up' },
    { value: 'delivery', label: '<i class="bi bi-truck"></i> Delivery' },
  ];
  paymentOptions: RadioButtonInput[] = [
    {
      value: 'online',
      label: '<i class="bi bi-lock"></i> Online payment',
    },
    {
      value: 'tranfer',
      label: '<i class="bi bi-wallet2"></i> Cash on delivery',
    },
  ];
  yocoKey = 'sk_live_719e114dNoYWzEQ176845e3a596c';
  user?: Users;

  constructor(
    private orderService: OrderService,
    private paymentService: PaymentService,
    private uxService: UxService,
    private router: Router,
    private lo: LoginService,
    private route: ActivatedRoute
  ) {
    lo.$user.subscribe((data) => {
      this.user = data;
      if (this.user && this.user.role === 'customer') {
        this.getOrder(this.user);
      } else {
        router.navigate(['/login']);
      }
    });
  }
  getOrder(user: Users) {
    this.route.params.subscribe((params) => {
      this.orderId = params['id'] || '0';
      if (this.orderId && Number(this.orderId) > 0) {
        this.orderService.get(Number(this.orderId)).subscribe((data) => {
          if (data && data.created_at && data.id) {
            data.metadata.customer = user;
            this.cartHelper.replace(data);
          }
        });
      } else {
        this.cartHelper.loadOrder();
        const data = this.cartHelper.order;
        if (data) {
          data.metadata.customer = user;
          this.cartHelper.replace(data);
        }
      }
    });
  }
  placeOrder() {
    if (!this.cartHelper.order) return;
    this.uxService.load();
    this.orderService.save(this.cartHelper.order).subscribe((data) => {
      if (data && data.id) {
        this.cartHelper.replace(data);
        this.payfast.shopingSuccesfulUrl = `${BASE}/${ORDER_SUCESS}/${data.id}`;
        this.payfast.paymentCancelledUrl = `${BASE}/${ORDER_CANCEL}/${data.id}`;
        this.payfast.paymentCallbackUrl = `${BASE}/home/payment-callback`;
        if (data.payment_method === 'tranfer') {
          this.payWithTransfer(data.id);
        } else {
          this.payWithPayfast();
          // this.payWithYoco();
        }
      }
    });
  }
  payWithPayfast() {
    setTimeout(() => {
      const link = document.getElementById('payfast-link') as HTMLAnchorElement;
      link?.click();
    }, 2);
  }
  payWithYoco() {
    this.paymentService.doPay(
      this.yocoKey,
      this.payfast.paymentCancelledUrl,
      this.payfast.shopingSuccesfulUrl,
      this.cartHelper.order?.total_price.toString() || ''
    );
  }
  payWithTransfer(id: number) {
    this.uxService.stopLoad();
    this.router.navigate([`/${ORDER_SUCESS}/${id}`]);
  }
  saveUser(user: Users) {
    throw new Error('Method not implemented.');
  }
}
