import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AlumnosPageComponent } from './pages/alumnos-page/alumnos-page.component';
import { AboutInstitutePageComponent } from './pages/about-institute-page/about-institute-page.component';
import { IngresoPageComponent } from './pages/ingreso-page/ingreso-page.component';
import { BibliotecaPageComponent } from './pages/biblioteca-page/biblioteca-page.component';
import { DesarrolloSoftwarePageComponent } from './pages/tecnicaturas/desarrollo-software-page/desarrollo-software-page.component';
import { ProductosMecanicosPageComponent } from './pages/tecnicaturas/productos-mecanicos-page/productos-mecanicos-page.component';
import { SeguridadHigienePageComponent } from './pages/tecnicaturas/seguridad-higiene-page/seguridad-higiene-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'home',
        component: MainPageComponent
      },
      {
        path: 'institucional',
        component: AboutInstitutePageComponent
      },
      {
        path: 'ingreso',
        component: IngresoPageComponent
      },
      {
        path: 'alumnos',
        component: AlumnosPageComponent
      },
      {
        path: 'alumnos',
        component: AlumnosPageComponent
      },
      {
        path: 'desarrollo-de-software',
        component: DesarrolloSoftwarePageComponent
      },
      {
        path: 'seguridad-e-higiene',
        component: SeguridadHigienePageComponent
      },
      {
        path: 'diseño-productos-mecanicos',
        component: ProductosMecanicosPageComponent
      },
      {
        path: 'biblioteca',
        component: BibliotecaPageComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Isft232RoutingModule { }
