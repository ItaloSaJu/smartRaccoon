import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { cardContent } from './cardInterface';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  standalone: true,
  imports:[
    CommonModule,
    TranslateModule,
  ]
})
export class ServiciosComponent {


  card:cardContent[]=[
    {
      "img": "../../../../assets/img/pensamiento.svg",
      "title": "Reporte de toma de decisione",
      "description": "Informes para análisis gerencial que ofrecen una visión completa del negocio, permitiendo decisiones informadas basadas en datos, identificando patrones y oportunidades de mejor."
    },
    {
      "img": "../../../../assets/img/ui.svg",
      "title": "Ui/Ux Design",
      "description": "El diseño de experiencia de usuario (UX) es clave para la eficacia y satisfacción del usuario, mejorando retención, eficiencia y reduciendo costos operativos."
    },
    {
      "img": "../../../../assets/img/html.svg",
      "title": "Web development",
      "description": "Desarrollo web experto para sitios y aplicaciones, enfocado en eficiencia y satisfacción del usuario para potenciar tu presencia digital."
    },
    {
      "img": "../../../../assets/img/mobile.svg",
      "title": "App development",
      "description": "Expertos en desarrollo de aplicaciones: creamos soluciones eficientes y centradas en la experiencia del usuario para potenciar tu presencia digital móvil."
    },
    {
      "img": "../../../../assets/img/bolas.svg",
      "title": "Analisis de procesos",
      "description": "Diferenciamos con enfoque analítico, pasión por resolver problemas operativos y soluciones de software personalizadas. Impulsamos tu éxito y destacamos en el mercado con eficiencia mejorada."
    }
  ]
}