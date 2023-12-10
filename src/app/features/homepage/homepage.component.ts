import { Component } from '@angular/core';
import { ServiciosComponent } from './servicios/servicios.component';
import { TranslateModule } from '@ngx-translate/core';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { GarantiaComponent } from './garantia/garantia.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone:true,
  imports:[ServiciosComponent, TranslateModule, PortafolioComponent,GarantiaComponent]

})
export class HomepageComponent {
 
}
