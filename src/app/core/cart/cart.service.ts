import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly URL = 'http://localhost:3000/cart';
  private productAdded = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  isProductAdded(): Observable<boolean>{
    return this.productAdded.asObservable();
  }

  updateCartItemCount(): void{
    this.productAdded.next(true);
  }

  addProductToCart(cart: Cart): Observable<Cart>{
    this.productAdded.next(true);
    return this.http.post<Cart>(this.URL, cart);
  }

  getCartItemsForUser(userId: number): Observable<Cart[]>{
    return this.http.get<Cart[]>(this.URL + '?userId=' + userId);
  }
}
