import { Component } from '@angular/core';
import { Notice } from '../../interfaces/noticias.interface';

@Component({
  selector: 'isft-noticias-page',
  templateUrl: './noticias-page.component.html',
  styles: ``
})
export class NoticiasPageComponent {

  public notice: Notice[] = [
    {
      url: '/assets/final_cursada_2023.webp',
      title: 'Final de la cursada 2023',
      description: `Con motivo de la culminación de la cursada de los primeros egresados de nuestro 
      instituto los estudiantes decidieron realizar su propia despedida con todos sus compañeros, 
      esto fue posible gracias a la ayuda de la cooperadora y de los estudiantes, 
      ya que la propuesta fue que los estudiantes de 2do año prepararan la comida de la despedida.`,
      route:'final-cursada-2023'
    },
    {
      url: '/assets/primeros_gradu.webp',
      title: 'Celebramos a nuestros primeros graduados',
      description: `El día 30 de Mayo celebramos el acto de colación para los primeros graduados y 
      graduadas en Tecnicatura Superior en Administración General y Tecnicatura Superior en Higiene y 
      Seguridad en el trabajo del I.S.F.T. n° 232 👩🏻‍🎓👨🏻‍🎓 Agradecemos inmensamente a quienes fueron parte 
      de este día tan especial: a los docentes por su dedicación, a las familias por su acompañamiento, 
      a las autoridades que nos han acompañado por su invaluable apoyo y principalmente a los estudiantes, 
      por su incansable perseverancia y pasión. También agradecemos al gran equipo que participó en la 
      organización. Nuestros estudiantes han alcanzado un hito importante en su camino académico, y no 
      podríamos estar más orgullosos de cada uno de ellos y ellas. Ha sido un viaje lleno de desafíos, aprendizajes 
      y momentos inolvidables. Ahora, nuestros graduados y graduadas están listos para enfrentar nuevos 
      retos y dejar su huella en el mundo. ¡Felicidades, graduados y graduadas! 🎉`,
      route:'primeros-graduados'
    },
    {
      url: '/assets/unidad_integral.webp',
      title: 'Inauguración de la unidad integral',
      description: `Queremos compartir con ustedes una Gran noticia : el municipio de Alte Brown 
      conformo la primera unidad integral en el partido y además es la tercera en la provincia de Buenos 
      Aires, junto con la de Zarate y San Vicente. La misma esta conformada por la Escuela Secundaria 
      Técnica n°4, el Centro de Formación Profesional n°403 y el Instituto Superior de Formación Técnica 
      n°232, la idea de esta unidad es poder trabajar de forma conjunta para poder generar proyectos que 
      brinden un impacto positivo en el contexto en el que se ubican, permitiéndoles a los estudiantes que 
      puedan poner en prácticas su conocimiento en función a las necesidades de la comunidad. Para que esto 
      sea posible contamos con la conducción de Analia Figueira, quien sera la encargada de crear el vinculo 
      con el sector científico tecnológico y socioproductivo. A partir de ello, creemos que el Instituto 
      puede brindar un gran aporte para que esto sea posible.`,
      route:'unidad-integral'
    }
  ];
}
