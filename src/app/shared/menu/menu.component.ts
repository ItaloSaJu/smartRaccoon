import { Component } from '@angular/core';
import { LanguagesEnum } from 'src/assets/languages/languages';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
export type SelectInterface = 'action-sheet' | 'popover' | 'alert';
export type SelectCompareFn = (currentValue: any, compareValue: any) => boolean;
import { fromEvent, map } from 'rxjs';
export interface SelectChangeEventDetail<T = any> {
  value: T;
}

export interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink],
})
export class MenuComponent {
  LOCALE = 'locale';

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['es', 'en', 'fr']);
    translateService.setDefaultLang('es');
  }

  ngOnInit() {
    
const clicks = fromEvent<PointerEvent>(document, 'click');
const positions = clicks.pipe(map(ev => ev.clientX));

positions.subscribe(x => console.log(x));
  }

  switchLang(lang: string) {
    console.log(lang);
    this.translateService.use(lang);
  }

  getIconPath(lang: any) {
    return `assets/img/${lang}.svg`;
  }



}
