import { Component } from '@angular/core';

@Component({
  selector: 'isft-alumnos-page',
  templateUrl: './alumnos-page.component.html',
  styleUrl: './alumnos-page.component.css'
})
export class AlumnosPageComponent {
  
  showOverlay: boolean = false;

  toggleOverlay(show: boolean) {
    this.showOverlay = show;
  }

}
