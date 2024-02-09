import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppSchemaComponent } from './shared/app-schema/app-schema.component';
import { CategoryComponent } from './admin/categories/category/category.component';
import { CompaniesComponent } from './admin/companies/companies/companies.component';
import { CompanyComponent } from './admin/companies/company/company.component';
import { CategoriesComponent } from './admin/categories/categories/categories.component';
import { SettingsComponent } from './admin/settings/settings/settings.component';
import { OrdersComponent } from './admin/orders/orders/orders.component';
import { OrderComponent } from './admin/orders/order/order.component';
import { CustomersComponent } from './admin/customers/customers/customers.component';
import { CustomerComponent } from './admin/customers/customer/customer.component';
import { UsersComponent } from './admin/users/users/users.component';
import { UserComponent } from './admin/users/user/user.component';
import { ProductsComponent } from './admin/products/products/products.component';
import { ProductComponent } from './admin/products/product/product.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { SignUpComponent } from './accounts/login/sign-up/sign-up.component';
import { FindRestaurantsComponent } from './client/find-restaurants/find-restaurants.component';
import { RestaurantsFoundComponent } from './client/find-restaurants/restaurants-found/restaurants-found.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductOptionsFormComponent } from './admin/products/product-options-form/product-options-form.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { EditProductComponent } from './admin/products/edit-product/edit-product.component';
import { ChooseProductsComponent } from './cart/choose-products/choose-products.component';
import { ChooseOptionsComponent } from './cart/choose-options/choose-options.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ORDER_CANCEL, ORDER_SUCESS } from 'src/settings';
import { OrderSuccessComponent } from './shop/order-success/order-success.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'restaurants', component: CompaniesComponent },
      { path: 'restaurants/:id', component: CompanyComponent },
      { path: 'restaurant-products/:id', component: ProductsComponent },
      { path: 'add-product/:companyId', component: AddProductComponent },
      { path: 'edit-product/:companyId/:productId', component: EditProductComponent },
      { path: 'products-options/:productId', component: ProductOptionsFormComponent },
      {
        path: 'product/:companyId/:productId',
        component: ProductComponent,
      },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/:id', component: CategoryComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/:id', component: OrderComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'customers/:id', component: CustomerComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
  { path: 'schema', component: AppSchemaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'find-restaurants', component: FindRestaurantsComponent },
  { path: 'search/:latitude/:longitude', component: RestaurantsFoundComponent },
  { path: 'choose-products/:latitude/:longitude/:companyId', component: ChooseProductsComponent },
  { path: 'choose-options/:latitude/:longitude/:companyId/:productId', component: ChooseOptionsComponent },
  // { path: 'choose-options/:companyId/:productId', component: ChooseOptionsComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: `${ORDER_CANCEL}/:orderId`,
    component: CheckoutComponent,
  },
  {
    path: `${ORDER_SUCESS}/:orderId`,
    component: OrderSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
