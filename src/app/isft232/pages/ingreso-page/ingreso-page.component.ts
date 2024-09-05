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
      info_inscription: `La información sobre la inscripción definitiva para el 
      ciclo 2025 será comunicada a través de nuestras redes sociales.`,
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
