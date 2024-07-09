import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from '../../../shared/component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-notice-two',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './notice-two.component.html',
  styleUrl: './notice-two.component.css'
})
export default class NoticeTwoComponent implements OnInit {

  noticiaDos: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.noticiaDos = params.get('route') ?? '';
    });
  }

  noticeImg: any[] = [
    {
      url: '../assets/unidad_integral.webp',
      title: 'Inauguración de la unidad integral',
      description: `Queremos compartir con ustedes una Gran noticia : el municipio de Alte Brown conformo la primera unidad integral en el partido y además es la tercera en la provincia de Buenos Aires, junto con la de Zarate y San Vicente.
              La misma esta conformada por la Escuela Secundaria Técnica n°4, el Centro de Formación Profesional n°403 y el Instituto Superior de Formación Técnica n°232, la idea de esta unidad es poder trabajar de forma conjunta para poder generar proyectos que brinden un impacto positivo en el contexto en  el que se ubican, permitiéndoles a los estudiantes que puedan poner en prácticas su conocimiento en función a las necesidades de la comunidad.
              Para que esto sea posible contamos con la conducción de Analia Figueira, quien sera la encargada de crear el vinculo con el sector científico tecnológico y socioproductivo.
              A partir de ello, creemos que el Instituto puede brindar un gran aporte para que esto sea posible.`,
      route: 'unidad-integral'
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
