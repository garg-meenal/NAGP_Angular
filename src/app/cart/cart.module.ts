import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class CartModule { }
