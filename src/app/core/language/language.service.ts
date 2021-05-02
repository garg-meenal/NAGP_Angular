import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly allLanguages = ['en', 'de'];
  private readonly allLanguageNames = ['English', 'German'];
  private readonly defaultLanguage = 'en';
  private currentLanguage: string;

  constructor(private userService: UserService) { }

  public getAllLanguageNames(): string[]{
    return this.allLanguageNames;
  }

  public getAllSupportedLanguages(): string[] {
    return this.allLanguages;
  }

  public getDefaultLanguage(): string {
    return this.defaultLanguage;
  }

  public setCurrentLanguage(value: string): void {
    this.currentLanguage = value;
  }

  public getCurrentLanguage(): string {
    let returnValue = this.currentLanguage;
    if (undefined === returnValue || '' === returnValue) {
      returnValue = this.defaultLanguage;
    }
    return returnValue;
  }

  public setLoggedInUserLanguage(res): void {
    let userLang = this.getDefaultLanguage();
    const user = this.userService.getLoggedInUserDetails();
    // logged in user detail is available then use his language
    // otherwise default language will be used
    if (user) {
      userLang = user.language;
    }
    this.setCurrentLanguage(userLang);
  }

  public getLanguageCode(language: string): string{
    switch (language){
      case 'English':
        return 'en';
      case 'German':
        return 'de';
      default:
        return 'en';
    }
  }
}
