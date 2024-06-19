import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, ImageSliderComponent, MainComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})

export default class LayoutComponent {

  slides: any[] = [
    {
      url: '/assets/ISFT232.jpeg',
      title: 'First slide',
      description: 'This is the first slide',
      route: 'noticiaUno'
    },
    {
      url: '/assets/programacion.png',
      title: 'Second slide',
      description: 'This is the second slide',
      route: 'noticiaDos'
    }
  ];

  notice: any[] = [
    {
      url: '/assets/ISFT232.jpeg',
      title: 'Novedades de cooperadora',
      description: 'Novedades sobre el trabajo realizado de la cooperadora',
      route:'noticiaCooperadora'
    },
    {
      url: '/assets/programacion.png',
      title: 'Novedades de la biblioteca',
      description: 'Novedades sobre la nueva biblioteca',
      route:'noticiaBiblioteca'
    },
    {
      url: '/assets/ISFT232.jpeg',
      title: 'Novedades de las nuevas carreras',
      description: 'Informate sobre las nuevas carreras de este 2024',
      route:'noticiaCarreras'
    },
    {
      url: '/assets/programacion.png',
      title: 'Novedades sobre el nuevo kiosco',
      description: 'Novedades sobre la atencion y los horarios del kiosco',
      route:'noticiaKiosco'
    }
  ];

  footer: any[] = [
    {
      url : '/assets/Logo232.png'
    }
  ];
}
