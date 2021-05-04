import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'shop', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  canActivate: [AuthGuard]},
  {path: 'product', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)},
  {path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
    canActivate: [AuthGuard]},
  {path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
    canActivate: [AuthGuard]},
  {path: 'terms', loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule)},
  {path: 'privacy', loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule)},
  {path: 'shipping', loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingModule)},
  {path: 'return', loadChildren: () => import('./return/return.module').then(m => m.ReturnModule)},
  {path: 'cancellation', loadChildren: () => import('./cancellation/cancellation.module').then(m => m.CancellationModule)},
  {path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
    canActivate: [AuthGuard]},
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
