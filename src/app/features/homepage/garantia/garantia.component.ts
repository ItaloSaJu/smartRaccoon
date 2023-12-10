import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-garantia',
  templateUrl: './garantia.component.html',
  styleUrls: ['./garantia.component.css'],
  standalone: true,
  imports:[
    CommonModule ,
    TranslateModule,
  ]
})
export class GarantiaComponent {

}
