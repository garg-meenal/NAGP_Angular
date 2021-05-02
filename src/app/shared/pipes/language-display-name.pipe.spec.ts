import { LanguageDisplayNamePipe } from './language-display-name.pipe';

describe('LanguageDisplayNamePipe', () => {
  const pipe = new LanguageDisplayNamePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return language display name', () => {
    expect(pipe.transform('en')).toBe('English');
  })
});
