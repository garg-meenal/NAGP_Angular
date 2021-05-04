import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../core/user/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  constructor(private userService: UserService
              //private modalService: NgbModal
              ) { }

  ngOnInit(): void {
    this.loadLoggedInUserDetails();
  }

  loadLoggedInUserDetails(): void{
    this.user = this.userService.getLoggedInUserDetails();
  }

  // open(userModal): void {
  //   this.modalService.open(userModal);
  // }

  // editPersonalDetails(): void{
  //   this.modalService.dismissAll();
  // }
}
