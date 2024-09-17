import { Component } from '@angular/core';
import { Institucional } from '../../../interfaces/institucional.interface';

@Component({
  selector: 'isft-about-institute-page',
  templateUrl: './about-institute-page.component.html'
})
export class AboutInstitutePageComponent {
  public institucional: Institucional[] = [
    {
      title_one: "Nuestro Instituto",
      text_one:`Somos el primer Instituto
        Técnico del Municipio de Alte Brown que ofrece tecnicaturas superiores 
        de aplicación laboral de alta necesidad en el mercado, las mismas 
        son presenciales, contamos solo con turno vespertino
        para que los estudiantes puedan estudiar y trabajar a la vez, todas
        cuentan con títulos de validéz nacional y el instituto es no arancelado.`, 
      text_two:`Nuestras tecnicaturas son innovadoras preparadas para que nuestros/as
            estudiantes sean lo que el mercado laboral está buscando. Proponemos
            formar profesionales capaces de adaptarse a los cambios del mundo
            productivo actual, que contribuyan a aumentar la eficiencia y
            competitividad de las organizaciones públicas y privadas donde se
            desempeñe como profesión independiente.`, 
      text_three:` Nuestros/as estudiantes son parte de una educación interactiva,
            eficiente, flexible, adaptada al mundo digital. Los escuchamos de forma
            activa ya que nos interesa su curiosidad y ganas de crecer siendo esto
            el motor que hace que nuestro instituto se adapte para ofrecer la mejor
            forma de aprender.`,
      text_four:`La decisión en la elección de las tecnicaturas son pensadas con la
            Secretaria de Educación de Alte Brown, con empresas, con expertos,
            especialistas que buscan profesionales preparados para el mundo laboral
            de hoy y mañana. No solo preparamos al estudiante en teoría, también en
            el conocimiento práctico ya que desde el primer año de la carrera
            cuentan con prácticas profesionalizantes.`,
      text_five:` Nuestra misión es formar profesionales capaces de adaptarse a los
            cambios del mundo productivo, con perfiles y habilidades necesarias a lo
            que demande el mercado laboral.`,
      title_two:"Plantel Docente", 
      text_two_one:`Contamos con un plantel docente altamente capacitado siendo
        profesionales que cuentan con gran experiencia laboral, y en la
        actualidad se desarrollan en su campo de conocimiento, lo que nos
        permite ofrecer un conocimiento actual, moderno y accesible, de
        constante actualización, que garantiza el aprendizaje y el éxito
        laboral.` 
    }
  ]
}
