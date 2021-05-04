import { OrderStatus } from '../enums/order.status.enum';
import { DeliveryAddress } from './address.model';
import { Product } from './product.model';

export class Order{
    id: number;
    name: string;
    billingEmail: string;
    shippingAddress: DeliveryAddress;
    products: Product[];
    orderStatus: OrderStatus;
    orderPlacedOn: Date;
}
