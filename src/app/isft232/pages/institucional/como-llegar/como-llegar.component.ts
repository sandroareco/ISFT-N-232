import { Component } from '@angular/core';
import { ComoLlegar } from '../../../interfaces/comoLlegar.interface';

@Component({
  selector: 'isft-como-llegar',
  templateUrl: './como-llegar.component.html',
})
export class ComoLLegarComponent {

  public comoLlegar: ComoLlegar[] = [
    {
      title_one: "En vehiculo",
      text_one:`Por Av H. Yrigoyen o por Av Monteverde desde desde Burzaco ingresar 
      a la Rotonda, tomar Av H. Yrigoyen sentido Longchamps y doblar a la derecha en Junin.`,
      text_two:"Por Av H. Yrigoyen desde Longchamps doblar en la calle Buenos Aires.",
      text_three:`Por Av Monteverde desde Malvinas Argentinas, doblar hacia la derecha 
      en Carlos Viel.`,
      title_two:"En Transporte público",
      text_two_one:"Desde Longchamps 501 Ramal Adrogue.",
      text_two_two:`Desde Burzaco 501 Ramal Glew - UOCRA, 406 sentido Ramos Mejia, 318 
      Ramal B semtido Lomas de Zamora, 521 hacia Parque Industrial.`,
      text_two_three:" Desde Claypole 338 ramal La Plata x Ruta 4.",
      text_two_four:"Desde Malvinas Argentinas 318 Ramal B x Burzaco, 338 ramal La Plata x Ruta 4, 406 sentido San Jose."
    }
  ];

}
