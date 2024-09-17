import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  isFixed = false;
  navbarOpen = false;
  navbarSubmenuInstitucional = false;
  navbarSubmenuTecnicaturas = false;
  lastScrollTop = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll === 0) {
      this.isFixed = false;
    } else if (currentScroll < this.lastScrollTop) {
      this.isFixed = true;
    } else if (currentScroll > this.lastScrollTop) {
      this.isFixed = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    if (this.navbarOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  

  showSubmenu(menu: string) {
    if (menu === 'institucional') {
      this.navbarSubmenuInstitucional = true;
    } else if (menu === 'tecnicaturas') {
      this.navbarSubmenuTecnicaturas = true;
    }
  }
  
  hideSubmenu(menu: string) {
    if (menu === 'institucional') {
      this.navbarSubmenuInstitucional = false;
    } else if (menu === 'tecnicaturas') {
      this.navbarSubmenuTecnicaturas = false;
    }
  }

  isSubmenuActive(submenuRoutes: string[]): boolean {
    return submenuRoutes.some(route => this.router.url.startsWith(route));
  }
  
  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }
  
  isActiveSubmenu(menu: string): boolean {
    if (menu === 'institucional') {
      return this.isSubmenuActive(['/nuestro-instituto', '/como-llegar']);
    } else if (menu === 'tecnicaturas') {
      return this.isSubmenuActive(['/desarrollo-de-software', '/seguridad-e-higiene', '/dis-productos-mecanicos']);
    }
    return false;
  }

  
}
