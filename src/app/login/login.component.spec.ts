import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../core/language/language.service';
import { UserService } from '../core/user/user.service';
import { of } from 'rxjs';
import { User } from '../shared/models/user.model';

const RouterSpy = jasmine.createSpyObj(
  'Router',
  ['navigateByUrl']
);

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let translateService: TranslateService;
  let userService: UserService;
  const user: User = new User();
    user.id = 1;
    user.userName = 'Meenal Garg';
    user.email = 'meenalgarg@gmail.com';
    user.password = '123456';
    user.language = 'en';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ TranslateModule.forRoot(), RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [{provide: LanguageService},
                  {provide: TranslateService}
                  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService); 
    translateService = TestBed.inject(TranslateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login successfully', () => {
    spyOn(userService, "getUserByEmail").and.callFake(function(){
    return of(user);
    });
    component.emailId = 'meenalgarg@gmail.com';
    component.password = '123456';
    component.login();
    var actualLoginStatus = localStorage.getItem('isUserLoggedIn');
    expect(actualLoginStatus).toBe('yes');
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('loggedInUser');
  });

  it('should not login as user does not exist', () => {
    spyOn(userService, "getUserByEmail").and.callFake(function(){
    return of(null);
    });
    component.emailId = 'meenalgarg123@gmail.com';
    component.password = '123456';
    component.login();
    var actualLoginStatus = localStorage.getItem('isUserLoggedIn');
    expect(actualLoginStatus).toBe(null);
  });

  it('should not login as password is incorrect', () => {
    spyOn(userService, "getUserByEmail").and.callFake(function(){
    return of(user);
    });
    component.emailId = 'meenalgarg@gmail.com';
    component.password = '12345';
    component.login();
    var actualLoginStatus = localStorage.getItem('isUserLoggedIn');
    expect(actualLoginStatus).toBe(null);
  })
});
