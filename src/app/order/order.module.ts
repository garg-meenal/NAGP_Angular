import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    OrderConfirmComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class OrderModule { }
