import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:":group", component:ProductsComponent},
  {path:":group/:category", component:ProductsComponent},
  {path:":group/:category/:subCategory", component:ProductsComponent},
  {path:"details/:id", component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }