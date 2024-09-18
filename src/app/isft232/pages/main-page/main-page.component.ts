import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  showOverlay: boolean = false;

  toggleOverlay(show: boolean) {
    this.showOverlay = show;
  }

}
