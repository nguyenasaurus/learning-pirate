import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCarouselComponent } from './event-carousel.component';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [EventCarouselComponent],
  imports: [CommonModule, RouterModule, SlickCarouselModule],
  exports: [EventCarouselComponent],
})
export class EventCarouselModule {}
