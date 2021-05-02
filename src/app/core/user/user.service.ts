import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { DeliveryAddress } from 'src/app/shared/models/address.model';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  loggedInUser: User;

  constructor(private http: HttpClient) { }

  private readonly URL = 'http://localhost:3000/users';

  setLoggedInUserDetails(user: User): void{
    this.loggedInUser = user;
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    this.isLoggedIn.next(true);
  }
  getLoggedInUserDetails(): User{
    if (this.loggedInUser){
      return this.loggedInUser;
    }else{
      const user: User = JSON.parse(localStorage.getItem('loggedInUser'));
      return user;
    }
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.URL);
  }

  getUserByEmail(email: string): Observable<User>{
    return this.http.get<User>(this.URL + '?email=' + email);
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.URL, user);
  }

  deleteUser(id: number): Observable<User>{
    return this.http.delete<User>(this.URL + '/' + id);
  }
}
