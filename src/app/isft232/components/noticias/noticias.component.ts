import { Component, Input } from '@angular/core';
import { Notice } from '../../interfaces/noticias.interface';

@Component({
  selector: 'components-noticias',
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent{
  @Input()
  public item!: Notice;

}