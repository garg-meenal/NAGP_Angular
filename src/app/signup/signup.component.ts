import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../core/language/language.service';
import { UserService } from '../core/user/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  newUser: User;
  errorMessage: string;
  languages: string[];
  userExists: boolean;
  existingUser: User;


  constructor(private router: Router,
              private userService: UserService,
              private languageService: LanguageService,
              private translateService: TranslateService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.newUser = new User();
    this.errorMessage = '';
    this.languages = this.languageService.getAllSupportedLanguages();
    this.userExists = false;
    this.existingUser = new User();
  }

  signup(): void{
    // check if email id already exists
    this.subscriptions.push(
      this.userService.getUserByEmail(this.newUser.email).subscribe(
        (data: User) => {
          this.existingUser = data[0];
          if (this.existingUser){
            this.userExists = true;
            this.errorMessage = 'SIGNUP.email_exist';
          }else{
            this.subscriptions.push(
              this.userService.addUser(this.newUser).subscribe(
                (data) => {
                  this.newUser = data;
                  localStorage.setItem('isUserLoggedIn', 'yes');
                  localStorage.setItem('loggedInUser', JSON.stringify(this.newUser));
                  this.languageService.setCurrentLanguage(this.newUser.language);
                  this.translateService.use(this.languageService.getCurrentLanguage());
                  this.userService.setLoggedInUserDetails(this.newUser);
                  // redirect to home page after successful login
                  this.router.navigateByUrl('/');
                },
                (error) => {
                  console.log(error);
                }
              ));
            }
        }
      )
    );
  }
}
