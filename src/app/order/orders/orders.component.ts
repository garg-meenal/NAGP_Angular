import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/order/order.service';
import { Order } from 'src/app/shared/models/order.model';
import { UserService } from 'src/app/core/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  allOrders: Order[] = [];

  constructor(private orderService: OrderService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  ngOnDestroy(): void{
    this.subscription.forEach(s => s.unsubscribe());
  }

  getAllOrders(): void{
    const email = this.userService.getLoggedInUserDetails().email;
    this.subscription.push(this.orderService.getAllOrdersOfUser(email).subscribe(
      data => this.allOrders = data
    ));
  }

}
