import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images = [
    '../../../../assets/images/about/Lauren Waldman 2020 DX396-6.png',
    '../../../../assets/images/about/Lauren Waldman 2020 DX396-5.png',
    '../../../../assets/images/about/Lauren Waldman 2020 DX396-3.png',
    '../../../../assets/images/about/Lauren Waldman 2020 DX396-4.png',
    '../../../../assets/images/about/Lauren Waldman 2020 DX396-2.png',
    '../../../../assets/images/about/Lauren Waldman 2020 DX396-1.png',
  ];

  slideIndex = 0;

  constructor() {}

  ngOnInit(): void {
    $(function () {
      $('#imgModal').on('click', function () {
        $('html, body').animate(
          {
            scrollTop: '0',
          },
          1200
        );
      });
    });
  }

  openModal() {
    // document.getElementById('imgModal')!.style.display = 'block';
    $('#imgModal').css({
      display: 'block',
    });
  }

  closeModal() {
    // document.getElementById('imgModal')!.style.display = 'none';
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
