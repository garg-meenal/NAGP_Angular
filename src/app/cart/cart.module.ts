import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { TranslateModule } from '@ngx-translate/core';
import { CartRoutingModule } from './cart-routing.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CartRoutingModule
  ]
})
export class CartModule { }
