import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    TranslateModule,
    UserRoutingModule
  ]
})
export class UserModule { }
