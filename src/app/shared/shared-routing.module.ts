import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: 'details/:id', component: ProductDetailComponent},
  {path: ':group', component: ProductsComponent},
  {path: ':group/:category', component: ProductsComponent},
  {path: ':group/:category/:subCategory', component: ProductsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
