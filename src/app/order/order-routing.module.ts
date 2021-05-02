import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';


const routes: Routes = [
  {path:"/confirm", component: OrderConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
