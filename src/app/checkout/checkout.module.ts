import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { TranslateModule } from '@ngx-translate/core';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CheckoutRoutingModule,
    FormsModule
  ]
})
export class CheckoutModule { }
