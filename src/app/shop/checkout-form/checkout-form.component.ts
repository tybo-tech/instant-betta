import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckoutFormData, initCheckoutFormData } from 'src/classes/cart.models';
import { Users, initUsers } from 'src/schema';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent {
  @Output() valueChange = new EventEmitter<Users>();
  @Input() formData: Users = initUsers;
}
