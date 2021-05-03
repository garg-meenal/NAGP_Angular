import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
