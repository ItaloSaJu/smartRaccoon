import { Component } from '@angular/core';
import { ServiciosComponent } from './servicios/servicios.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone:true,
  imports:[ServiciosComponent, TranslateModule]

})
export class HomepageComponent {

}
