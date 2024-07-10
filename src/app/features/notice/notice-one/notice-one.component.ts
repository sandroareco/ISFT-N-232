import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from "../../../shared/component/footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; 


@Component({
  selector: 'app-notice-one',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './notice-one.component.html',
  styleUrl: './notice-one.component.css'
})
export default class NoticeOneComponent implements OnInit {

  noticiaUno: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.noticiaUno = params.get('route') ?? '';
    });
  }

  noticeImg: any[] = [
    {
      url: '../assets/primeros_graduados.webp',
      title: '🎓 ¡Celebramos a nuestros primeros graduados y graduadas! 🎓',
      description: `El día 30 de Mayo celebramos el acto de colación para los primeros graduados y graduadas en Tecnicatura Superior en Administración General y 
                Tecnicatura Superior en Higiene y Seguridad en el trabajo del I.S.F.T. n° 232 👩🏻‍🎓👨🏻‍🎓
                Agradecemos inmensamente a quienes fueron parte de este día tan especial: a los docentes por su dedicación, a las familias por su acompañamiento, 
                a las autoridades que nos han acompañado por su invaluable apoyo y principalmente a los estudiantes, por su incansable perseverancia y pasión. 
                También agradecemos al gran equipo que participó en la organización.
                Nuestros estudiantes han alcanzado un hito importante en su camino académico,
                y no podríamos estar más orgullosos de cada uno de ellos y ellas. Ha sido un viaje lleno de desafíos, 
                aprendizajes y momentos inolvidables. Ahora, nuestros graduados y graduadas están listos para enfrentar nuevos retos y dejar su huella en el mundo.
                ¡Felicidades, graduados y graduadas! 🎉`,
      route: 'primeros-graduados'
    }
  ]

  footer: any[] = [
    {
      url : '../assets/Logo232.webp'
    }
  ];

  faInstagram = faInstagram;
  faFacebook = faFacebook;
}
