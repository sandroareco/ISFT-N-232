import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Isft232RoutingModule } from './isft232-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AlumnosPageComponent } from './pages/alumnos-page/alumnos-page.component';
import { IngresoPageComponent } from './pages/ingreso-page/ingreso-page.component';
import { BibliotecaPageComponent } from './pages/biblioteca-page/biblioteca-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NovedadesHomeComponent } from './pages/novedades-home/novedades-home.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { AboutInstitutePageComponent } from './pages/institucional/about-institute-page/about-institute-page.component';
import { DesarrolloSoftwarePageComponent } from './pages/tecnicaturas/desarrollo-software-page/desarrollo-software-page.component';
import { ProductosMecanicosPageComponent } from './pages/tecnicaturas/productos-mecanicos-page/productos-mecanicos-page.component';
import { SeguridadHigienePageComponent } from './pages/tecnicaturas/seguridad-higiene-page/seguridad-higiene-page.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NoticiasPageComponent } from './pages/noticias-page/noticias-page.component';
import { ComoLLegarComponent } from './pages/institucional/como-llegar/como-llegar.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    AlumnosPageComponent,
    IngresoPageComponent,
    BibliotecaPageComponent,
    MainPageComponent,
    NovedadesHomeComponent,
    HeroPageComponent,
    AboutInstitutePageComponent,
    DesarrolloSoftwarePageComponent,
    SeguridadHigienePageComponent,
    ProductosMecanicosPageComponent,
    NoticiasComponent,
    NoticiasPageComponent,
    ComoLLegarComponent
  ],
  imports: [
    CommonModule,
    Isft232RoutingModule,

    SharedModule
  ],
  exports: [
    Isft232RoutingModule
  ]
})
export class Isft232Module { }
