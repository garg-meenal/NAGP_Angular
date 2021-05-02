import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageDisplayNamePipe } from './pipes/language-display-name.pipe';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import {Ng2SearchPipe, Ng2SearchPipeModule} from 'ng2-search-filter';



@NgModule({
  declarations: [
  HeaderComponent,
  FooterComponent,
  CategoriesComponent,
  LanguageDisplayNamePipe,
  ProductsComponent,
  ProductDetailComponent],

  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    LanguageDisplayNamePipe
  ]
})
export class SharedModule { }
