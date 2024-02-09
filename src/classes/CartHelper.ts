import { Orders, Products, Users, initOrders } from 'src/schema';
import { ORDER } from 'src/settings';
import {
  OrderItems,
  IOption,
  CheckoutFormData,
  ICartOptions,
} from './cart.models';

export class CartHelper {
 
  order?: Orders;

  addToCart(options: ICartOptions, product: Products) {
    this.loadOrder();
    if (!this.order) return;

    const itemExist = this.getItem(options, product, this.order);

    if (itemExist) {
      // If the item already exists, update the quantity and recalculate the total
      itemExist.quantity += options.quantity;
      itemExist.total = itemExist.quantity * itemExist.productPrice;
    } else {
      // If the item doesn't exist, add a new item to the cart
      const newItem: OrderItems = {
        productId: product.id,
        options: options.options,
        productImage: product.image_url,
        productPrice: product.price,
        productName: product.name,
        quantity: options.quantity,
        total: product.price * options.quantity, // Calculate total for the new item
      };
      this.order.items.push(newItem);
    }

    // Update the total for the entire order
    this.order.total_price = this.calculateOrderTotal(this.order);

    // Save the updated order to local storage
    this.saveOrder();
  }

  getItem(options: ICartOptions, product: Products, order: Orders) {
    return order.items.find(
      (x) =>
        x.productId === product.id && this.compareOptions(x.options, options)
    );
  }

  compareOptions(options1: IOption[], options2: ICartOptions): boolean {
    if (!options2 || !options2.options) {
      return false;
    }
    return this.compareOptionsArray(options1, options2.options);
  }

  compareOptionsArray(array1: IOption[], array2: IOption[]): boolean {
    return (
      array1.length === array2.length &&
      array1.every(
        (item, index) =>
          item.name === array2[index].name && item.value === array2[index].value
      )
    );
  }

  loadOrder() {
    const storage = localStorage.getItem(ORDER);
    if (storage) {
      const item = JSON.parse(storage) as Orders;
      if (item.status) this.order = item;
    }
    if (!this.order) {
      this.order = initOrders;
    }
  }
  saveOrder() {
    localStorage.setItem(ORDER, JSON.stringify(this.order));
  }

  calculateOrderTotal(order: Orders): number {
    // Calculate the total for the entire order based on item totals
    return order.items.reduce((total, item) => total + item.total, 0);
  }

  updateCartItem(item: OrderItems, newQuantity: number) {
    if (!this.order) return;

    // Find the item in the cart
    const cartItem = this.order.items.find((x) => x === item);

    if (cartItem) {
      // Update the quantity and recalculate the total
      cartItem.quantity = newQuantity;
      cartItem.total = cartItem.quantity * cartItem.productPrice;

      // Update the total for the entire order
      this.order.total_price = this.calculateOrderTotal(this.order);

      // Save the updated order to local storage
      this.saveOrder();
    }
  }

  removeCartItem(item: OrderItems) {
    if (!this.order) return;

    // Remove the item from the cart
    this.order.items = this.order.items.filter((x) => x !== item);

    // Update the total for the entire order
    this.order.total_price = this.calculateOrderTotal(this.order);

    // Save the updated order to local storage
    this.saveOrder();
  }
  onCustomerChange(customer: Users) {
    if (!this.order) return;
    if (!this.order.metadata) {
      this.order.customer_id = customer.id;
      this.order.metadata = { customer: customer };
      this.saveOrder();
      return;
    }
    this.order.metadata.customer = customer;
    this.saveOrder();
  }
  setCompanyInfo(latitude: number, longitude: number, campany_id: number) {
    if (!this.order) return;
    this.order.metadata.latitude = latitude;
    this.order.metadata.longitude = longitude;
    this.order.restaurant_id = campany_id;
    this.saveOrder();
  }
  updateDelivery(method: string) {
    if (!this.order) return;
    this.order.metadata.deliveryMethod = method;
    this.saveOrder();
  }
  updatePayment(method: string) {
    if (!this.order) return;
    this.order.payment_method = method;
    this.saveOrder();
  }
  replace(data: Orders) {
    this.order = data;
    this.saveOrder();
  }
  get productName() {
    return (
      this.order?.items
        .map((x) => x.productName + ' ')
        .toString()
        .trim() || ''
    );
  }
}
