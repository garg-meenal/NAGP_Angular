import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CartService } from 'src/app/core/cart/cart.service';
import { ProductService } from 'src/app/core/product/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  subscriptions: Subscription[] = [];
  productDetails: Product = new Product();
  productId: number;
  availableSizes: string[];
  availableQuantity: number[];
  readonly PARAM_ID = 'id';

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.availableSizes = ['S', 'M', 'L', 'XL'];
    this.availableQuantity = [1, 2, 3, 4, 5];
    this.subscriptions.push(this.route.params.subscribe(params => {
      this.productId = params[this.PARAM_ID];
   }));
    this.getProductDetails();
    this.productDetails.images = [];
  }


  getProductDetails(): void{
    this.subscriptions.push(this.productService.getProductById(this.productId).subscribe(
      data => this.productDetails = data[0]));
  }

  addToCart(): void{
    // let cart = new Cart();
    // cart.product = this.productDetails;
    // cart.userId = this.userService.getLoggedInUserDetails().id;
    // this.cartService.addProductToCart(cart).subscribe();
    // this.toastr.success('Product Added.');
    let cartItems: Product[] = [];
    if (localStorage.getItem('cartItems')){
      cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }
    let productExists: boolean;
    cartItems.forEach(item => {
      const product = item;
      if (product.id === this.productDetails.id){
        const previousQuantity = product.quantity;
        // update quantity in previously added product
        product.quantity = Number(previousQuantity) + Number(this.productDetails.quantity);
        productExists = true;
      }
    });
    if (!productExists){
      cartItems.push(this.productDetails);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.toastr.success('Product Added.');
    this.cartService.updateCartItemCount();
  }

}
