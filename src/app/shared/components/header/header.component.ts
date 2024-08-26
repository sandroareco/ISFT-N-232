import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  navbarOpen = false;
  navbarSubmenu = false;
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleSubmenu(){
    this.navbarSubmenu = !this.navbarSubmenu;
  }
}
