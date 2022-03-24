import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Gallery } from 'src/app/interfaces/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  slideIndex = 0;

  gallery: Gallery[] = [];

  constructor(private aboutService: AboutService) {
    this.aboutService.getGallery().subscribe((res: Gallery[]) => {
      this.gallery = res;
    });
  }

  ngOnInit(): void {}

  openModal() {
    $('#imgModal').css({
      display: 'block',
    });
  }

  closeModal() {
    $('#imgModal').css({
      display: 'none',
    });
  }

  plusSlides(n: any) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n: any) {
    this.showSlides((this.slideIndex = n));
  }

  // showSlides(slideIndex: any);
  showSlides(n: any) {
    let i;
    const slides = document.getElementsByClassName(
      'img-slides'
    ) as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName(
      'images'
    ) as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    if (dots && dots.length > 0) {
      dots[this.slideIndex - 1].className += ' active';
    }
  }
}
