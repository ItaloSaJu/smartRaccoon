import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { PortafolioComponent } from './features/portafolio/portafolio.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'portafolio',
    component: PortafolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
