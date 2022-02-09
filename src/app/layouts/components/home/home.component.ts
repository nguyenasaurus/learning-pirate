import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home';

  bgImage = '../../../../assets/images/head.png';
  slideTitle = 'For those <br>who dare to <br>do it differently';
  slideSubtitle = '&nbsp;';
  desc =
    'We make investments in seasoned entrepreneurs promoting businesses with formidable moats.';
  slideUrl = '/our-service/venture-capital--1';

  socialPages = [
    {
      icon: '../../../../assets/images/twitter.svg',
      url: 'https://twitter.com',
    },
    {
      icon: '../../../../assets/images/instagram.svg',
      url: 'https://instagram.com',
    },
    {
      icon: '../../../../assets/images/facebook-logo.svg',
      url: 'https://facebook.com',
    },
    {
      icon: '../../../../assets/images/linkedin.svg',
      url: 'https://linkedin.com',
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}

  toTop() {
    document.getElementById('about')!.scrollIntoView();
  }
}
