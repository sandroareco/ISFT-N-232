import { CommonModule } from '@angular/common';
import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImageSliderComponent{
  @Input() slides: any[] = [];
  currentSlide = 0;
}






