import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  @Input() showOverlay: boolean = false;
  @Output() overlayChange = new EventEmitter<boolean>();  

  isFixed = false;
  navbarOpen = false;
  navbarSubmenuInstitucional = false;
  navbarSubmenuTecnicaturas = false;
  lastScrollTop = 0;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.navbarOpen = false;
        document.body.style.overflow = 'auto';
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
  
    if (this.navbarOpen) {
      this.isFixed = true;
    } else {
      if (currentScroll === 0) {
        this.isFixed = false; 
      } else if (currentScroll < this.lastScrollTop) {
        this.isFixed = true; 
      } else if (currentScroll > this.lastScrollTop) {
        this.isFixed = false; 
      }
    }
  
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
  

  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  
    this.overlayChange.emit(this.navbarOpen);
  
    if (this.navbarOpen) {
      document.body.style.overflow = 'hidden';
      this.isFixed = true;
    } else {
      document.body.style.overflow = 'auto';
      this.isFixed = false;
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

  closeNavbar() {
    this.navbarOpen = false;
    document.body.style.overflow = 'auto';
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
