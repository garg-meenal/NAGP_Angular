import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { TranslateModule } from '@ngx-translate/core';
import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OrderConfirmComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }
