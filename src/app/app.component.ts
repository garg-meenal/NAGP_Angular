import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shop';

  constructor(public translate: TranslateService,
              private language: LanguageService){
  }
  ngOnInit(): void {
    this.translate.addLangs(this.language.getAllSupportedLanguages());
    this.translate.setDefaultLang(this.language.getDefaultLanguage());
    this.translate.use(this.language.getCurrentLanguage());
  }
}
