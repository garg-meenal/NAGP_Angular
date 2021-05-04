import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { DeliveryAddress} from 'src/app/shared/models/address.model';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/core/user/user.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/core/order/order.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/cart/cart.service';
import { OrderStatus } from 'src/app/shared/enums/order.status.enum';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CheckoutComponent implements OnInit, OnDestroy {

  deliveryAddresses: DeliveryAddress[];
  selectedAddress: DeliveryAddress;
  indiaStates: string[] = [];
  subscriptions: Subscription[] = [];
  cartItems: Product[];
  totalAmount: number;
  loggedInUser: User;

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private userService: UserService,
              private orderService: OrderService,
              private router: Router,
              private cartService: CartService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnDestroy(): void{
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    // this.getBillingInfo();
    this.getLoggedInUserInfo();
    this.selectedAddress = new DeliveryAddress();
    this.getDeliveryAddresses();
    this.initializeStates();
    this.showOrderInfo();
  }

  getLoggedInUserInfo(): void{
    this.loggedInUser = this.userService.getLoggedInUserDetails();
  }
  initializeStates(): void{
    this.indiaStates.push('Andhra Pradesh');
    this.indiaStates.push('Arunachal Pradesh');
    this.indiaStates.push('Assam');
    this.indiaStates.push('Bihar');
    this.indiaStates.push('Chandigarh');
    this.indiaStates.push('Chhattisgarh');
    this.indiaStates.push('Dadar and Nagar Haveli');
    this.indiaStates.push('Daman and Diu');
    this.indiaStates.push('Delhi');
    this.indiaStates.push('Puducherry');
    this.indiaStates.push('Goa');
    this.indiaStates.push('Gujarat');
    this.indiaStates.push('Haryana');
    this.indiaStates.push('Himachal Pradesh');
    this.indiaStates.push('Jammu and Kashmir');
    this.indiaStates.push('Jharkhand');
    this.indiaStates.push('Karnataka');
    this.indiaStates.push('Kerala');
    this.indiaStates.push('Madhya Pradesh');
    this.indiaStates.push('Maharashtra');
    this.indiaStates.push('Manipur');
    this.indiaStates.push('Meghalaya');
    this.indiaStates.push('Mizoram');
    this.indiaStates.push('Nagaland');
    this.indiaStates.push('Odisha');
    this.indiaStates.push('Punjab');
    this.indiaStates.push('Rajasthan');
    this.indiaStates.push('Sikkim');
    this.indiaStates.push('Tamil Nadu');
    this.indiaStates.push('Telangana');
    this.indiaStates.push('Tripura');
    this.indiaStates.push('Uttar Pradesh');
    this.indiaStates.push('Uttarakhand');
    this.indiaStates.push('West Bengal');
  }

  open(addressModal): void {
    this.selectedAddress = new DeliveryAddress();
    this.modalService.open(addressModal);
  }

  getDeliveryAddresses(): void{
      if (this.loggedInUser.address.length > 0){
        this.deliveryAddresses = this.loggedInUser.address;
        this.selectedAddress = this.deliveryAddresses[0];
      }
  }

  updateSelectedAddress(index: number): void{
    this.selectedAddress = this.deliveryAddresses[index];
  }

  addAddress(): void{
    this.modalService.dismissAll();
    this.deliveryAddresses.push(this.selectedAddress);
    // update address in localstorage
    this.loggedInUser.address = this.deliveryAddresses;
    // update address in database
    this.subscriptions.push(this.userService.deleteUser(this.loggedInUser.id).subscribe());
    this.subscriptions.push(this.userService.addUser(this.loggedInUser).subscribe(
    data => localStorage.setItem('loggedInUser', JSON.stringify(data))
    ));
  }

  showOrderInfo(): void{
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.totalAmount = 0;
    this.cartItems.forEach(c => {
      const productAmount: number = Number(c.price) * Number(c.quantity);
      this.totalAmount = this.totalAmount + productAmount;
    });
  }

  placeOrder(): void{
    this.cartService.updateCartItemCount();
    const order: Order = new Order();
    order.name = this.loggedInUser.userName;
    order.billingEmail = this.loggedInUser.email;
    order.shippingAddress = this.selectedAddress;
    order.products = this.cartItems;
    order.orderStatus = OrderStatus.ORDER_PLACED;
    order.orderPlacedOn = new Date();
    this.subscriptions.push(this.orderService.addOrder(order).subscribe());
    localStorage.removeItem('cartItems');
    this.router.navigateByUrl('order/confirm');
  }
}
