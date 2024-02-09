export interface IOption {
    name: string;
    value: string;
  }

  export interface OrderItems {
    total: number;
    productId: number;
    productName: string;
    productImage: string;
    productPrice: number;
    quantity: number;
    options: IOption[];
  }

  export interface ICartOptions {
    quantity: number;
    options: IOption[];
  }
  export interface CheckoutFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    streetAddress: string;
    city: string;
    postalCode: string;
  }

  export const initCheckoutFormData: CheckoutFormData = {
    firstName: '',
    lastName: '',
    streetAddress: '',
    email: '',
    phone: '',
    city: '',
    postalCode: '',
  };
  export interface RadioButtonInput {
    value: any;
    label: string;
  }
  