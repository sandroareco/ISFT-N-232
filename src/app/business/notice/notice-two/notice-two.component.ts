import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notice-two',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './notice-two.component.html',
  styleUrl: './notice-two.component.css'
})
export default class NoticeTwoComponent implements OnInit {

  noticiaDos: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.noticiaDos = params.get('route') ?? '';
    });
  }

}
