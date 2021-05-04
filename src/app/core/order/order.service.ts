import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly URL: string = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(this.URL, order);
  }

  getAllOrdersOfUser(email: string): Observable<Order[]>{
    return this.http.get<Order[]>(this.URL + '?billingEmail=' +email);
  }
}
