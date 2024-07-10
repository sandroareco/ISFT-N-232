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
      url: '/assets/primeros_gradu.webp',
      title: 'First slide',
      description: '¡Celebramos a nuestros primeros graduados y graduadas!',
      route: 'primeros-graduados'
    },
    {
      url: '/assets/unidad_integral.webp',
      title: 'Second slide',
      description: 'Inauguración de la unidad integral',
      route: 'unidad-integral'
    }
  ];

  notice: any[] = [
    {
      url: '/assets/ISFT232.webp',
      title: 'Novedades de cooperadora',
      description: 'Novedades sobre el trabajo realizado de la cooperadora',
      route:'noticiaCooperadora'
    },
    {
      url: '/assets/ISFT232.webp',
      title: 'Novedades de la biblioteca',
      description: 'Novedades sobre la nueva biblioteca',
      route:'noticiaBiblioteca'
    },
    {
      url: '/assets/ISFT232.webp',
      title: 'Novedades de las nuevas carreras',
      description: 'Informate sobre las nuevas carreras de este 2024',
      route:'noticiaCarreras'
    },
    {
      url: '/assets/final_cursada_2023.webp',
      title: 'Final de la cursada 2023',
      description: `Con motivo de la culminación de la cursada de los primeros egresados de nuestro instituto los estudiantes decidieron realizar su propia despedida con todos sus compañeros, 
      esto fue posible gracias a la ayuda de la cooperadora y de los estudiantes, 
      ya que la propuesta fue que los estudiantes de 2do año prepararan la comida de la despedida.`,
      route:'final-cursada-2023'
    }
  ];

  footer: any[] = [
    {
      url : '/assets/Logo232.webp'
    }
  ];
}
