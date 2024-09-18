import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notice } from '../../interfaces/noticias.interface';
import { NoticiasService } from '../../service/noticias.service';

@Component({
  selector: 'noticias-page',
  templateUrl: './noticias-page.component.html'
})
export class NoticiasPageComponent implements OnInit {
  showOverlay: boolean = false;

  toggleOverlay(show: boolean) {
    this.showOverlay = show;
  }
  
  public selectedNotice?: Notice;
  
  constructor(
    private noticiasService: NoticiasService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const routeParam = params.get('route');

      if (routeParam) {
        const noticias = this.noticiasService.getNoticias();
        this.selectedNotice = noticias.find(notice => notice.route === routeParam);

        if (!this.selectedNotice) {
          this.router.navigate(['/home']);
        }
      } else {
        this.router.navigate(['/home']);
      }

    });
  }
  
}
