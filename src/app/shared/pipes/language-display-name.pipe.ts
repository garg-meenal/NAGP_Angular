import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageDisplayName'
})
export class LanguageDisplayNamePipe implements PipeTransform {

  transform(value: string): string {
    let languageName;
    switch (value){
      case 'en':
        languageName = 'English';
        break;
      case 'de':
        languageName = 'German';
    }
    return languageName;
  }

}
