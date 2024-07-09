import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-notice-main-four',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,FontAwesomeModule],
  templateUrl: './notice-main-four.component.html',
  styleUrl: './notice-main-four.component.css'
})
export default class NoticeMainFourComponent {

  noticeImg: any[] = [
    {
      url: '../assets/final_cursada_2023.webp',
      title: 'Final de la cursada 2023',
      description: `Con motivo de la culminación de la cursada de los primeros egresados de nuestro instituto los estudiantes decidieron realizar su propia despedida con todos sus compañeros,
          esto fue posible gracias a la ayuda de la cooperadora y de los estudiantes, ya que la propuesta fue que los estudiantes de 2do año prepararan la comida de la despedida.
          Por otro lado, un momento muy emotivo fue cuando los egresados de la Tecnicatura Superior en Seguridad e Higiene en el trabajo pusieron en práctica el juego del amigo invisible en donde cada uno debía entregarle a un compañero un regalo que tenga que ver con su personalidad y dedicarle unas breves palabras.
          La jornada terminó como una tarde de risas, vivencias y charlas acerca de las experiencias compartidas en el transcurso de la carrera.`,
      route: 'final-cursada-2023'
    }
  ]

  footer: any[] = [
    {
      url : '../assets/Logo232.png'
    }
  ];

  faInstagram = faInstagram;
  faFacebook = faFacebook;

}
