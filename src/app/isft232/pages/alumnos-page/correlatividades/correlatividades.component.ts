import { Component } from '@angular/core';

@Component({
  selector: 'app-correlatividades',
  templateUrl: './correlatividades.component.html',
  styleUrl: './correlatividades.component.css'
})
export class CorrelatividadesComponent {
  
  showOverlay: boolean = false;

  toggleOverlay(show: boolean) {
    this.showOverlay = show;
  }

}
