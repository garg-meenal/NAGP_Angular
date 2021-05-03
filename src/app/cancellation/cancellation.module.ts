import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancellationRoutingModule } from './cancellation-routing.module';
import { CancellationComponent } from './cancellation/cancellation.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CancellationComponent
  ],
  imports: [
    CommonModule,
    CancellationRoutingModule,
    TranslateModule
  ]
})
export class CancellationModule { }
