import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from 'src/app/shared/models/user.model';

describe('UserService', () => {
  let service: UserService;
  const user = new User();
  user.userName = 'test';
  user.email = 'test@gmail.com';
  user.language = 'en';
  user.phoneNumber = 1234567890;
  user.password = '123456';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return added user', () => {
    service.addUser(user).subscribe(value => {
      expect(value).toEqual(user);
    });
  });

  it('should return user by email', () => {
    const email = 'test@gmail.com';
    service.getUserByEmail(email).subscribe(value => {
      expect(value).toEqual(user);
    });
  });
});
