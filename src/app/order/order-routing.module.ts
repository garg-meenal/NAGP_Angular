import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {path: 'confirm', component: OrderConfirmComponent},
  {path: 'all', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
