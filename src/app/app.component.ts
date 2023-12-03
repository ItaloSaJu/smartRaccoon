import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { MenuComponent } from './shared/menu/menu.component';
import { LanguagesEnum } from 'src/assets/languages/languages';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet,RouterOutlet,
      MenuComponent]
})
export class AppComponent {
  LOCALE = 'locale';
  constructor(private translate: TranslateService){
    this.initTranslate();

  }


  initTranslate() {
    const supportedLanguages = Object.values(LanguagesEnum);
    this.translate.addLangs(supportedLanguages);

    const defaultLang = LanguagesEnum.ES;
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang(defaultLang);

    const localLang = localStorage.getItem(this.LOCALE) as LanguagesEnum;
    if (localLang && supportedLanguages.includes(localLang)) {
      this.translate.use(localLang);
      return;
    }
    let lang = this.translate.getBrowserLang() as LanguagesEnum;
    if (lang && supportedLanguages.includes(lang))
      this.translate.use(lang); // Set your language here
    else {
      lang = this.translate.defaultLang as LanguagesEnum;
    }
    localStorage.setItem(this.LOCALE, defaultLang); 
  }

}
