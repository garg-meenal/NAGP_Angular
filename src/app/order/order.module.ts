import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { TranslateModule } from '@ngx-translate/core';
import { OrderRoutingModule } from './order-routing.module';



@NgModule({
  declarations: [
    OrderConfirmComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
