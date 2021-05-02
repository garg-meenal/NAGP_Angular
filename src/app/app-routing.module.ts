import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CancellationComponent } from './cancellation/cancellation/cancellation.component';
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderConfirmComponent } from './order/order-confirm/order-confirm.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';
import { ProfileComponent } from './profile/profile.component';
import { ReturnComponent } from './return/return/return.component';
import { ProductDetailComponent } from './shared/components/products/product-detail/product-detail.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ShippingComponent } from './shipping/shipping/shipping.component';
import { SignupComponent } from './signup/signup.component';
import { TermsComponent } from './terms/terms/terms.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'shop', component: HomeComponent},
  {path: 'shop/:group', component: ProductsComponent},
  {path: 'shop/:group/:category', component: ProductsComponent},
  {path: 'shop/:group/:category/:subCategory', component: ProductsComponent},
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'product/details/:id', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  {path: 'order/confirm', component: OrderConfirmComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'shipping', component: ShippingComponent},
  {path: 'return', component: ReturnComponent},
  {path: 'cancellation', component: CancellationComponent},
  {path: '', redirectTo: 'shop', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
