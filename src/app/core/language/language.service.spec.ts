import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all languages name', () => {
    expect(service.getAllLanguageNames()).toEqual(['English', 'German']);
  });

  it('should return all languages code', () => {
    expect(service.getAllSupportedLanguages()).toEqual(['en', 'de']);
  });

  it('should return default languages code', () => {
    expect(service.getDefaultLanguage()).toEqual('en');
  });

  it('should return languages code', () => {
    expect(service.getLanguageCode('English')).toEqual('en');
  });
});
