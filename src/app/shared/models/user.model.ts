import { DeliveryAddress } from './address.model';

export class User{
    public id: number;
    public userName: string;
    public email: string;
    public phoneNumber: number;
    public password: string;
    public language: string;
    public address: DeliveryAddress[];


    getUserId(): number{
        return this.id;
    }

    getUserName(): string{
        return this.userName;
    }

    getEmail(): string{
        return this.email;
    }
}
