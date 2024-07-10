import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faBars = faBars;
  faChevronDown = faChevronDown;
  faXmark = faXmark;

  navbarOpen = false;
  navbarSubmenu = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleSubmenu(){
    this.navbarSubmenu = !this.navbarSubmenu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isClickInsideMenu = target.closest('nav') !== null;

    if (!isClickInsideMenu) {
      this.navbarOpen = false;
      this.navbarSubmenu = false;
    }
  }
}
