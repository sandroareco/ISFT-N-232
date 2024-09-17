import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(private router: Router) {}

  showIframe(): boolean {
    return this.router.url !== '/como-llegar';
  }

}
