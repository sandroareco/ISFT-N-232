import { Component } from '@angular/core';
import { Tecnicaturas } from '../../interfaces/tecnicaturas.interface';

@Component({
  selector: 'isft-ingreso-page',
  templateUrl: './ingreso-page.component.html'
})
export class IngresoPageComponent {
  public ingreso: Tecnicaturas[] = [
    {
      url_inscription: "https://docs.google.com/forms/d/e/1FAIpQLSd4LgYgWpHcw5cHXbVMvohaEKIxTSsurYw9vH5ki88e2F8Y8Q/viewform",
      info_inscription: `Inscripción definitiva para el ciclo 2025 
                        13 y 14 de Diciembre de 2024
                        en nuestra sede de Junín y Tomás Guido, Burzaco,
                        en el horario de 17:30 a 20:30 horas`,
      title_requisitos: 'Requisitos de Ingreso',
      info_req_1: 'Carpeta 3 solapas azul',
      info_req_2: 'Completar la Ficha de Inscripción',
      info_req_3: '2 fotos 4 cm x 4 cm.',
      info_req_4: 'Presentar fotocopia del título secundario y exhibir el original. También se acepta la fotocopia y/o la constancia de título en trámite.',
      info_req_5: 'Presentar fotocopia del DNI anverso - reverso y exhibir el original.',
      info_req_6: 'Presentar fotocopia de la partida de nacimiento.',
    }
  ];
}
