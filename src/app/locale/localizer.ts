
export class Localizer {

  /**
   * Name of the current active language.  
   *
   * Note that we sometimes use simple language name and not the full tag name.
   * For instance, our 'en' language name is in fact the 'en-US' standard
   * language tag.
   *
   * More about language tags can be found here: 
   * - https://www.w3.org/International/articles/language-tags/
   * - https://r12a.github.io/app-subtags/
   */
  public currentLanguageName = 'he';

  /**
   * The current language is a nested dictionary with this structure:  
   * [module_name][phrase_name] = [localized_string]  
   * 
   * Example: currentLanguage.common.appName (returns "כנסת פתוחה 2.0")
   */
  public get currentLanguage(): IMap<IMap<string>> {
    return this.langs[this.currentLanguageName];
  }

  public get supportedLanguages(): string[] {
    return Object.keys(this.langs);
  }  

  /**
   * [language_name][module_name][phrase_name]
   */
  private readonly langs: IMap<IMap<IMap<string>>>;

  /**
   * @param langFile [module_name][phrase_name][language_name]
   */
  constructor(langFile: IMap<IMap<IMap<string>>>) {
    this.langs = this.createLangsDictionary(langFile);
  }

  /**
   * [module_name][phrase_name][language_name] --> [language_name][module_name][phrase_name]
   *
   * Does not mutates the input object.
   */
  private createLangsDictionary(languageFile: IMap<IMap<IMap<string>>>): IMap<IMap<IMap<string>>> {
    const result: IMap<IMap<IMap<string>>> = {};

    for (const moduleName of Object.keys(languageFile)) {
      for (const phraseName of Object.keys(languageFile[moduleName])) {
        for (const langName of Object.keys(languageFile[moduleName][phraseName])) {

          if (!result[langName])
            result[langName] = {};

          if (!result[langName][moduleName])
            result[langName][moduleName] = {};

          const translation = languageFile[moduleName][phraseName][langName];
          result[langName][moduleName][phraseName] = translation;
        }
      }
    }

    return result;
  }
}