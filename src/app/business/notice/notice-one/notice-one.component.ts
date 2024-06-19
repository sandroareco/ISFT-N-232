import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notice-one',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './notice-one.component.html',
  styleUrl: './notice-one.component.css'
})
export default class NoticeOneComponent implements OnInit {

  noticiaUno: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.noticiaUno = params.get('route') ?? '';
    });
  }

}
