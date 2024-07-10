import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() notice: any[] = [];
  
  nosotros: any[] = [
    {
      url: '/assets/ISFT232.webp',
      title: 'Instituto Superior de Formación técnica Nº232',
      description: `El ISFT N ° 232 fue creado en noviembre de 2019 y dicha creación obedece a la propuesta presentada por la Municipalidad de Alte Brown parara el dictado de las carreras “Tecnicatura Superior en Administración General” y “Tecnicatura Superior en Higiene y Seguridad en el Trabajo”.
              Durante el 2021 se sumo la Tecnicatura en Producción Agrícola Ganadera y para el ciclo lectivo 2022 se suma la nueva Tecnicatura en Desarrollo de Software.
              En la actualidad nuestra Institución, juntamente con la EET N ° 4, el CFP 403 conforma la Unidad Integrada de Educación Técnica.
              También conformamos  la Unidad Integrada de Educación Agraria junto al CEA 34 y la EESA N ° 1 de la localidad de Glew.`
    }
  ]
}
