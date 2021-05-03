import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './shipping/shipping.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ShippingComponent
  ],
  imports: [
    CommonModule,
    ShippingRoutingModule,
    TranslateModule
  ]
})
export class ShippingModule { }
