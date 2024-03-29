export const forms = {
  categories: [
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Name',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Image url',
      value: '',
      type: 'image',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Parent id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
  companies: [
    {
      label: 'Logo',
      value: '',
      type: 'image',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Name',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
 
    {
      label: 'Description',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Owner id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Address',
      value: '',
      type: 'address',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Latitude',
      value: '',
      type: 'latitude',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Longitude',
      value: '',
      type: 'longitude',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Address url',
      value: '',
      type: 'address_url',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: true,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
  ],
  delivery_info: [
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Base delivery price',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Price per km',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Distance threshold',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
  markup_ranges: [
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Rule id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Min price',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Max price',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Markup percentage',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
  order_item_options: [
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Order item id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Name',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Value',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Price',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Parent option id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
  order_items: [
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Order id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Item id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Item name',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Item image',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Quantity',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Subtotal',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
  orders: [
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Customer id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Restaurant id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Status',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Total price',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Order date',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Payment method',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Payment status',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Payment date time',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Payment confirmed by',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Slug',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
  products: [
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Image url',
      value: '',
      type: 'image',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Campany id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
      is_reference: true
    },
    {
      label: 'Category id',
      label_override: 'Select Category',
      value: '',
      type: 'select',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
      parent_dropdown: 'categories',
      dropdown_options: undefined,
    },
    {
      label: 'Name',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Description',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Price',
      value: '',
      type: 'money',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Availability',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },

    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
  tokens: [
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'User id',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Token',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
  users: [
    {
      label: 'User id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Username',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Email',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Password',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Role',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Phone number',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Address line 1',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Address line 2',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'City',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Dob',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Address',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Latitude',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Longitude',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Url',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
  variation_options: [
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Variation id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Value',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Price',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Parent option id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
  variations: [
    {
      label: 'Id',
      value: '',
      type: 'number',
      show_on_add: false,
      show_on_update: false,
      show_on_list: false,
      show_on_details: false,
    },
    {
      label: 'Item id',
      value: '',
      type: 'number',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Name',
      value: '',
      type: 'text',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
    {
      label: 'Created at',
      value: '',
      type: 'datetime-local',
      show_on_add: true,
      show_on_update: true,
      show_on_list: true,
      show_on_details: true,
    },
  ],
};
