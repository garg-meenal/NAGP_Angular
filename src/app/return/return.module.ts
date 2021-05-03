import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnRoutingModule } from './return-routing.module';
import { ReturnComponent } from './return/return.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ReturnComponent
  ],
  imports: [
    CommonModule,
    ReturnRoutingModule,
    TranslateModule
  ]
})
export class ReturnModule { }
