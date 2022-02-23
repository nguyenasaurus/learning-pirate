import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonyCarouselComponent } from './testimony-carousel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TestimonyCarouselComponent],
  imports: [CommonModule, RouterModule],
  exports: [TestimonyCarouselComponent],
})
export class TestimonyCarouselModule {}
