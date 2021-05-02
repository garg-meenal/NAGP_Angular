import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/cart/cart.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  subscriptions: Subscription[] = [];
  cartItems: Product[] = [];
  noItems: number;
  availableSizes: string[];
  availableQuantity: number[];
  totalAmount = 0;

  constructor(private router: Router,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.availableSizes = ['S', 'M', 'L', 'XL'];
    this.availableQuantity = [1, 2, 3, 4, 5];
    this.getCartItems();
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void{
    this.totalAmount = 0;
    this.cartItems.forEach(c => {
      const productAmount: number = Number(c.price) * Number(c.quantity);
      this.totalAmount = this.totalAmount + productAmount;
    });
  }
  getCartItems(): void{
    if (localStorage.getItem('cartItems')){
      this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }
    this.noItems = this.cartItems.length;
  }

  checkout(): void{
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.router.navigateByUrl('/checkout');
  }

  deleteProduct(id: number): void{
    this.cartItems.forEach((item, index) => {
      if (item.id === id) {
        this.cartItems.splice(index, 1);
      }});
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.getCartItems();
    this.calculateTotalAmount();
    this.cartService.updateCartItemCount();
  }

}
