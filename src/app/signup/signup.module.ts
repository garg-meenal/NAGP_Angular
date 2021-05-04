import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    SignupRoutingModule,
    SharedModule
  ]
})
export class SignupModule { }
