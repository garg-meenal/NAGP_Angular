import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/cart/cart.service';
import { CategoryService } from 'src/app/core/category/category.service';
import { UserService } from 'src/app/core/user/user.service';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  isUserLoggedIn: string;
  loggedInUser: User;
  firstName: string;
  groups: string[];
  categories: Category[] = [];
  categoryNames: string[] = [];
  categoryLoaded: boolean;
  cartCount: number;
  searchText: string;

  constructor(private router: Router,
              private userService: UserService,
              private translateService: TranslateService,
              private categoryService: CategoryService,
              private cartService: CartService) {
    this.subscriptions.push(this.userService.getIsLoggedIn().subscribe((data) => this.setLoggedInUser(data)));
    this.subscriptions.push(this.cartService.isProductAdded().subscribe(data => this.updateCartCount(data)));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.groups = ['men', 'women', 'kids'];
    this.categoryLoaded = false;
    this.loadCategories();
    if (localStorage.getItem('isUserLoggedIn')){
      this.isUserLoggedIn = 'yes';
      this.setLoggedInUser(true);
    }else{
      this.isUserLoggedIn = 'no';
    }
    this.searchText = '';
  }

  setLoggedInUser(flag: boolean): void{
    if (flag){
      this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
      this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (this.loggedInUser){
         this.firstName = this.loggedInUser.userName.split(' ')[0];
         this.translateService.use(this.loggedInUser.language);
      }
    }else{
      this.isUserLoggedIn = 'no';
    }
  }

  search(): void{
    this.router.navigateByUrl('/shop/' + this.searchText);
    this.searchText = '';
  }

  loadCategories(): void{
    if (!this.categoryLoaded){
      this.subscriptions.push(this.categoryService.getAllCategories().subscribe(
        (data: Category[]) => {
          if (data){
            this.categories = data;
            data.forEach(d => this.categoryNames.push(d.name));
            this.categoryLoaded = true;
          }
        }
      ));
    }
  }

  getProducts(group: string , category?: string, subCategory?: string): void{
    let URL: string = '/shop/' + group;
    if (category){
      URL = URL + '/' + category;
    }
    if (subCategory){
      URL = URL + '/' + subCategory;
    }
    this.router.navigateByUrl(URL);
  }

  updateCartCount(flag: boolean): void{
    if (localStorage.getItem('cartItems')){
      const cartItems: Product[] = JSON.parse(localStorage.getItem('cartItems'));
      this.cartCount = cartItems.length;
    }
  }

  logout(){
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('loggedInUser');
    this.router.navigateByUrl('/');
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
    this.ngOnInit();
  }
}
