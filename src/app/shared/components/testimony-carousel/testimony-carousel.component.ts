import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony-carousel',
  templateUrl: './testimony-carousel.component.html',
  styleUrls: ['./testimony-carousel.component.scss'],
})
export class TestimonyCarouselComponent implements OnInit {
  @Input() items: any;
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 5000;

  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  // Set Active Item
  setActiveItem(item: any, index: number) {
    this.selectedIndex = index;
  }

  // Changes every 3 seconds
  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // Set dot indicator on click
  selectedImage(index: number) {
    this.selectedIndex = index;
  }

  // end

  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex - this.items.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if (this.selectedIndex === this.items.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
