import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancellationRoutingModule } from './cancellation-routing.module';
import { CancellationComponent } from './cancellation/cancellation.component';


@NgModule({
  declarations: [
    CancellationComponent
  ],
  imports: [
    CommonModule,
    CancellationRoutingModule
  ]
})
export class CancellationModule { }
