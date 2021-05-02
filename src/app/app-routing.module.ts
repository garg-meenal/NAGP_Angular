import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderConfirmComponent } from './order/order-confirm/order-confirm.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailComponent } from './shared/components/products/product-detail/product-detail.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { SignupComponent } from './signup/signup.component';
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
  {path: '', redirectTo: 'shop', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
