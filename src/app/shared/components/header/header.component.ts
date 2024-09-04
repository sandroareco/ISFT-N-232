import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  navbarOpen = false;
  navbarSubmenuInstitucional = false;
  navbarSubmenuTecnicaturas = false;
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleSubmenuInstitucional() {
    this.navbarSubmenuInstitucional = !this.navbarSubmenuInstitucional;
    // Cerrar el otro submenu si está abierto
    if (this.navbarSubmenuTecnicaturas) {
      this.navbarSubmenuTecnicaturas = false;
    }
  }

  toggleSubmenuTecnicaturas() {
    this.navbarSubmenuTecnicaturas = !this.navbarSubmenuTecnicaturas;
    // Cerrar el otro submenu si está abierto
    if (this.navbarSubmenuInstitucional) {
      this.navbarSubmenuInstitucional = false;
    }
  }
}
