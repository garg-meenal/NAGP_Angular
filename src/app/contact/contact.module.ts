import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class ContactModule { }
