import { Component, Input } from '@angular/core';
import { CartHelper } from 'src/classes/CartHelper';

@Component({
  selector: 'app-payment-forms',
  templateUrl: './payment-forms.component.html',
  styleUrls: ['./payment-forms.component.scss']
})
export class PaymentFormsComponent {
  @Input() cartHelper ?: CartHelper
  @Input() payfast = {
    shopingSuccesfulUrl: '',
    paymentCallbackUrl: '',
    paymentCancelledUrl: '',
  }
  merchantId = '17194710';
  merchantKey = 'tqcl4iesooa66';
}
