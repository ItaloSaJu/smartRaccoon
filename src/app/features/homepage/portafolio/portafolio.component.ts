import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
  standalone: true,
  imports:[
    CommonModule ,
    TranslateModule,
  ]
})
export class PortafolioComponent {

  dataCards = [
    {
      'image' : "../../../../assets/img/1.jpg",
      'title' : " Questa è una prova 1",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 1
    },
    {
      'image' : "../../../../assets/img/2.jpg",
      'title' : " Questa è una prova 1",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 1
    },
    {
      'image' : "../../../../assets/img/3.jpg",
      'title' : " Questa è una prova 1",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 1
    },
    {
      'image' : "../../../../assets/img/4.jpg",
      'title' : " Questa è una prova 1",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 1
    },
    {
      'image' : "../../../../assets/img/5.jpg",
      'title' : " Questa è una prova 2",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 2
    },
    {
      'image' : "../../../../assets/img/6.jpg",
      'title' : " Questa è una prova 2",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 2
    },
    {
      'image' : "../../../../assets/img/1.jpg",
      'title' : " Questa è una prova 2",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 2
    },
    {
      'image' : "../../../../assets/img/2.jpg",
      'title' : " Questa è una prova 2",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 2
    },
    {
      'image' : "../../../../assets/img/3.jpg",
      'title' : " Questa è una prova 3",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 3
    },
    {
      'image' : "../../../../assets/img/4.jpg",
      'title' : " Questa è una prova 3",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 3
    },
    {
      'image' : "../../../../assets/img/5.jpg",
      'title' : " Questa è una prova 3",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 3
    },
    {
      'image' : "../../../../assets/img/6.jpg",
      'title' : " Questa è una prova 3",
      "description" : 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem quidem non dignissimos, sit dolorum ad ',
      "position": 3
    }
  ]

}
