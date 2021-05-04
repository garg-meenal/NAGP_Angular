import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from '../core/user/user.service';

const RouterSpy = jasmine.createSpyObj(
    'Router',
    ['navigate']
  );

class MockUserService{
    user = [
        {"id": 1,
        "userName": "Meenal Garg",
        "email": "meenalgarg@gmail.com",
        "password": "123456",
        "language": "en"}];
    
    getUserByEmail(email: string){
        return of(this.user);
    }
}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: UserService;
  

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, RouterTestingModule, TranslateModule.forRoot(),
        HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: {
            snapshot: {
                paramMap: {
                    redirectURL(): string {
                        return '/';
                    },
                },
            },
        }, },
        { provide: Router, useValue: RouterSpy },
        { provide: UserService, useClass: MockUserService }
        ]  
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login Success', () => {
    var comp = TestBed.createComponent(LoginComponent).componentInstance;
    comp.emailId = 'meenalgarg@gmail.com';
    comp.password = '123456';
    comp.login();
    var actualLoginStatus = localStorage.getItem('isUserLoggedIn');
    expect(actualLoginStatus).toBe('yes');
  });

});

