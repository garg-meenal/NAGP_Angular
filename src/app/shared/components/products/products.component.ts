import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/product/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  products: Product[] = [];
  group: string;
  category: string;
  subCategory: string;
  searchText: string;
  groups: string[] = [];
  readonly PARAM_GROUP = 'group';
  readonly PARAM_CATEGORY = 'category';
  readonly PARAM_SUBCATEGORY = 'subCategory';

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = function(): boolean {
        return false;
      };
      this.subscriptions.push(this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.router.navigated = false;
        }
      }));
     }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.groups = ['men', 'women', 'kids'];
    this.subscriptions.push(this.route.params.subscribe(params => {
      this.group = params[this.PARAM_GROUP];
      this.category = params[this.PARAM_CATEGORY];
      this.subCategory = params[this.PARAM_SUBCATEGORY];
    }));
    if (this.subCategory){
      this.getProductBySubCategories();
    }else if (this.category){
      this.getProductByCategory();
    }else if (this.group){
      if (this.groups.includes(this.group)){
        this.getProductsByGroup();
      }else{
        this.getAllProducts();
        this.searchText = this.group;
      }
    }
  }

  getAllProducts(): void{
    this.subscriptions.push(this.productService.getAllProducts().subscribe(
      data => this.products = data
    ));
  }
  getProductBySubCategories(): void{
    this.subscriptions.push(this.productService.getProductsBySubCategory(this.group, this.category,
      this.subCategory).subscribe(
      data => this.products = data
    ));
  }

  getProductByCategory(): void{
    this.subscriptions.push(this.productService.getProductsByCategory(this.group, this.category)
    .subscribe(
      data => this.products = data
    ));
  }

  getProductsByGroup(): void{
    this.subscriptions.push(this.productService.getProductsByGroup(this.group).subscribe(
      data => this.products = data
    ));
  }

  productDetails(id: number): void{
    this.router.navigateByUrl('product/details/' + id);
  }
}
