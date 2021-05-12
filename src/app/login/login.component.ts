import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../core/language/language.service';
import { UserService } from '../core/user/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  emailId = '';
  password = '';
  errorMessage = '';
  loggedInUser: User;
  redirectURL = '/';
  subscriptions: Subscription[] = [];
  readonly REDIRECT_URL = 'redirectURL';

  constructor(public router: Router,
              private route: ActivatedRoute,
              private translateService: TranslateService,
              private languageService: LanguageService,
              private userService: UserService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void{
    this.initializeLanguage();
  }

  initializeLanguage(): void{
    this.translateService.addLangs(this.languageService.getAllSupportedLanguages());
    this.translateService.setDefaultLang(this.languageService.getDefaultLanguage());
    this.translateService.use(this.languageService.getCurrentLanguage());
  }

  login(): void{
    this.subscriptions.push(
      this.userService.getUserByEmail(this.emailId).subscribe(
        (data: User) => {
          if(data != null){
            if (data[0]){
              this.loggedInUser = data[0];
            }else if (data){
              this.loggedInUser = data;
            }
          }
           if (this.loggedInUser){
             if (this.loggedInUser.password === this.password){
               localStorage.setItem('isUserLoggedIn', 'yes');
               localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
               this.languageService.setCurrentLanguage(this.loggedInUser.language);
               this.translateService.use(this.languageService.getCurrentLanguage());
               this.userService.setLoggedInUserDetails(this.loggedInUser);
               // redirect to previous page after successful login
               const params = this.route.snapshot.queryParams;
               if (params[this.REDIRECT_URL]) {
                   this.redirectURL = params[this.REDIRECT_URL];
               }
               this.router.navigateByUrl(this.redirectURL)
                   .catch(() => this.router.navigateByUrl('/'));
             }else{
               this.loggedInUser = new User();
               this.errorMessage = 'LOGIN.password_incorrect';
             }
          }else{
           this.errorMessage = 'LOGIN.user_not_exist';
          }
        },
        (error) => {
           console.log(error);
        }
      )
    );
  }
}
