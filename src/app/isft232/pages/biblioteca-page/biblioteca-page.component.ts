import { Component } from '@angular/core';
import { Institucional } from '../../interfaces/institucional.interface';

@Component({
  selector: 'app-biblioteca-page',
  templateUrl: './biblioteca-page.component.html'
})

export class BibliotecaPageComponent {

  showOverlay: boolean = false;

  toggleOverlay(show: boolean) {
    this.showOverlay = show;
  }

  public biblioteca: Institucional[] = [{
    text_one:`En la biblioteca vas a poder encontrar tanto material correspondiente a las tecnicaturas, 
    como asi también libros de literatura.`,
    text_two:`Dependiendo el tipo de material que solicites a préstamos es el tiempo en que te lo podes llevar. 
    En caso que necesites algún material en particular lo podes solicitar.`,
    text_three:'Te podes acercar a la biblioteca de Lunes a Viernes de 18hs a 21 hs o sino te podes comunicar via mail a:',
    text_four:'biblioteca.isft232@gmail.com'
  }]
}
