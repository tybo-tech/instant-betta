import {
  CheckoutFormData,
  OrderItems,
  initCheckoutFormData,
} from './classes/cart.models';
export interface Users {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  phone_number: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  dob: string;
  address: string;
  latitude: number;
  longitude: number;
  url: string;
  created_at: string;
  metadata: any;
  // Ui
  orders?: Orders[];
}

export const initUsers: Users = {
  id: 0,
  username: '',metadata: {date: new Date()},
  email: '',
  password: '',
  role: '',
  phone_number: '',
  address_line_1: '',
  address_line_2: '',
  city: '',
  dob: '',
  address: '',
  latitude: 0,
  longitude: 0,
  url: '',
  created_at: '',
};
export interface Categories {
  id: number;
  name: string;
  image_url: string;
  parent_id: number;
  created_at: string;
}

export const initCategories: Categories = {
  id: 0,
  name: '',
  image_url: '',
  parent_id: 0,
  created_at: '',
};

export interface Companies {
  id: number;
  name: string;
  logo: string;
  description: string;
  owner_id: number;
  address: string;
  latitude: number;
  longitude: number;
  address_url: string;
  created_at: string;
  //Ui
  link?: string;
}

export const initCompanies: Companies = {
  id: 0,
  name: '',
  logo: '',
  description: '',
  owner_id: 0,
  address: '',
  latitude: 0,
  longitude: 0,
  address_url: '',
  created_at: '',
};

export interface Delivery_info {
  id: number;
  base_delivery_price: number;
  price_per_km: number;
  distance_threshold: number;
  created_at: string;
}

export const initDelivery_info: Delivery_info = {
  id: 0,
  base_delivery_price: 0,
  price_per_km: 0,
  distance_threshold: 0,
  created_at: '',
};

export interface Markup_ranges {
  id: number;
  rule_id: number;
  min_price: number;
  max_price: number;
  markup_percentage: number;
  created_at: string;
}

export const initMarkup_ranges: Markup_ranges = {
  id: 0,
  rule_id: 0,
  min_price: 0,
  max_price: 0,
  markup_percentage: 0,
  created_at: '',
};

export interface Order_item_options {
  id: number;
  order_item_id: number;
  name: string;
  value: string;
  price: number;
  parent_option_id: number;
  created_at: string;
}

export const initOrder_item_options: Order_item_options = {
  id: 0,
  order_item_id: 0,
  name: '',
  value: '',
  price: 0,
  parent_option_id: 0,
  created_at: '',
};

export interface Order_items {
  id: number;
  order_id: number;
  item_id: number;
  item_name: string;
  item_image: string;
  quantity: number;
  subtotal: number;
  created_at: string;
  options: Order_item_options[];
  total: number;
  productPrice: number;
}

export const initOrder_items: Order_items = {
  id: 0,
  order_id: 0,
  total: 0,
  productPrice: 0,
  item_id: 0,
  item_name: '',
  item_image: '',
  quantity: 0,
  subtotal: 0,
  created_at: '',
  options: [],
};

export interface Orders {
  metadata: OrderMetadata;
  id: number;
  customer_id: number;
  restaurant_id: number;
  status: string;
  total_price: number;
  order_date: string;
  payment_method: string;
  payment_status: string;
  payment_date_time: string;
  payment_confirmed_by: string;
  created_at: string;
  slug: string;

  //Ui
  items: OrderItems[];
}
export interface OrderMetadata {
  deliveryMethod?: string;
  customer: Users;
  latitude?: number;
  longitude?: number;
  distance?: number;
}

export const initOrders: Orders = {
  id: 0,
  customer_id: 0,
  restaurant_id: 0,
  status: '',
  total_price: 0,
  order_date: '',
  payment_method: 'online',
  payment_status: '',
  payment_date_time: '',
  payment_confirmed_by: '',
  created_at: '',
  slug: '',
  items: [],
  metadata: {
    customer: initUsers,
    deliveryMethod: 'delivery',
    latitude: 0,
    longitude: 0,
    distance: 0,
  },
};

export interface Products {
  id: number;
  campany_id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  availability: number;
  image_url: string;
  created_at: string;
  metadata: ProductMetadata;
  // Ui
  link?: string;
}
export interface ProductOptions {
  name: string;
  allowMultiple: boolean;
  options: ProductOptionItem[];
}
export interface ProductMetadata {
  variations?: ProductOptions[];
}

export interface ProductOptionItem {
  value: string;
  price: number;
}
export const initProducts: Products = {
  id: 0,
  campany_id: 0,
  category_id: 0,
  name: '',
  description: '',
  price: 0,
  availability: 0,
  image_url: '',
  created_at: '',
  metadata: {},
};

export interface Tokens {
  id: number;
  user_id: string;
  token: string;
  created_at: string;
}

export const initTokens: Tokens = {
  id: 0,
  user_id: '',
  token: '',
  created_at: '',
};

export interface Variation_options {
  id: number;
  variation_id: number;
  value: string;
  price: number;
  parent_option_id: number;
  created_at: string;
}

export const initVariation_options: Variation_options = {
  id: 0,
  variation_id: 0,
  value: '',
  price: 0,
  parent_option_id: 0,
  created_at: '',
};

export interface Variations {
  id: number;
  item_id: number;
  name: string;
  created_at: string;
  Variation_options?: Variation_options[];
}

export const initVariations: Variations = {
  id: 0,
  item_id: 0,
  name: '',
  created_at: '',
};

export interface UxModel {
  loading?: boolean;
  message?: string;
  company?: Companies;
  messageClass?: string;
}
