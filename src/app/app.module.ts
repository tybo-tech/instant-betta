import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './accounts/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './shared/toast/toast.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LogoComponent } from './shared/logo/logo.component';
import { NavItemComponent } from './shared/nav-item/nav-item.component';
import { reports_declarations, reports_modules } from './reports';
import { MessageService } from 'primeng/api';
import { QuillModule } from 'ngx-quill';
import { DynamicFormComponent } from './shared/dynamic-form/dynamic-form.component';
import { GenericListComponent } from './shared/generic-list/generic-list.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { BreadComponent } from './shared/bread/bread.component';
import { AppSchemaComponent } from './shared/app-schema/app-schema.component';
import { AppSchemaListComponent } from './shared/app-schema-list/app-schema-list.component';
import { CategoryComponent } from './admin/categories/category/category.component';
import { CompanyComponent } from './admin/companies/company/company.component';
import { CompaniesComponent } from './admin/companies/companies/companies.component';
import { ProductsComponent } from './admin/products/products/products.component';
import { ProductComponent } from './admin/products/product/product.component';
import { CategoriesComponent } from './admin/categories/categories/categories.component';
import { OrdersComponent } from './admin/orders/orders/orders.component';
import { OrderComponent } from './admin/orders/order/order.component';
import { CustomersComponent } from './admin/customers/customers/customers.component';
import { CustomerComponent } from './admin/customers/customer/customer.component';
import { UsersComponent } from './admin/users/users/users.component';
import { UserComponent } from './admin/users/user/user.component';
import { SettingsComponent } from './admin/settings/settings/settings.component';
import { DyanamicDetialsComponent } from './shared/dyanamic-detials/dyanamic-detials.component';
import { WideCardComponent } from './shared/cards/wide-card/wide-card.component';
import { SectionProductComponent } from './shared/cards/section-product/section-product.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { SignUpComponent } from './accounts/login/sign-up/sign-up.component';
import { FindRestaurantsComponent } from './client/find-restaurants/find-restaurants.component';
import { RestaurantsFoundComponent } from './client/find-restaurants/restaurants-found/restaurants-found.component';
import { MapEmbedComponent } from './shared/map-embed/map-embed.component';
import { CardComponent } from './reuse/card/card.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { ProductOptionsFormComponent } from './admin/products/product-options-form/product-options-form.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { BackHeadingComponent } from './shared/back-heading/back-heading.component';
import { UploadInputComponent } from './shared/upload-input/upload-input.component';
import { EditProductComponent } from './admin/products/edit-product/edit-product.component';
import { EmptyStateComponent } from './shared/empty-state/empty-state.component';
import { ChooseProductsComponent } from './cart/choose-products/choose-products.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { CartLoginComponent } from './cart/cart-login/cart-login.component';
import { CartSignUpComponent } from './cart/cart-sign-up/cart-sign-up.component';
import { OrderPlacedComponent } from './cart/order-placed/order-placed.component';
import { ChooseOptionsComponent } from './cart/choose-options/choose-options.component';
import { CartModalComponent } from './shop/cart-modal/cart-modal.component';
import { CartItemComponent } from './shop/cart-item/cart-item.component';
import { CartQtyComponent } from './shop/cart-qty/cart-qty.component';
import { RadioButtonComponent } from './shared/radio-button/radio-button.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { CheckoutFormComponent } from './shop/checkout-form/checkout-form.component';
import { OrderSummaryComponent } from './shop/order-summary/order-summary.component';
import { PaymentFormsComponent } from './shop/payment-forms/payment-forms.component';
import { OrderSuccessComponent } from './shop/order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToastComponent,
    SideNavComponent,
    AdminDashboardComponent,
    LogoComponent,
    NavItemComponent,
    ...reports_declarations,
    DynamicFormComponent,
    GenericListComponent,
    TopBarComponent,
    BreadComponent,
    AppSchemaComponent,
    AppSchemaListComponent,
    CategoriesComponent,
    CategoryComponent,
    CompanyComponent,
    CompaniesComponent,
    ProductsComponent,
    ProductComponent,
    OrdersComponent,
    OrderComponent,
    CustomersComponent,
    CustomerComponent,
    UsersComponent,
    UserComponent,
    SettingsComponent,
    DyanamicDetialsComponent,
    WideCardComponent,
    SectionProductComponent,
    LandingPageComponent,
    SignUpComponent,
    FindRestaurantsComponent,
    RestaurantsFoundComponent,
    MapEmbedComponent,
    CardComponent,
    AdminComponent,
    ProductDetailsComponent,
    ProductOptionsFormComponent,
    AddProductComponent,
    BackHeadingComponent,
    UploadInputComponent,
    EditProductComponent,
    EmptyStateComponent,
    ChooseProductsComponent,
    CartModalComponent,
    CartPageComponent,
    CartLoginComponent,
    CartSignUpComponent,
    CheckoutComponent,
    OrderPlacedComponent,
    ChooseOptionsComponent,
    CartItemComponent,
    CartQtyComponent,
    RadioButtonComponent,
    CheckoutFormComponent,
    OrderSummaryComponent,PaymentFormsComponent,OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...reports_modules,
    QuillModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
