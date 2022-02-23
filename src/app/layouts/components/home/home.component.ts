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

  testimonies = [
    {
      id: 1,
      icon: '../../../../assets/images/iconSmall.png',
      name: 'Matt Burns',
      title: 'Founder, BentoHR',
      testimony:
        '“Learning Needs Lauren Waldman. Her Willingness To Challenge The Status Quo; Pairing Neuroscience With An Evidence-Based Approach To Enterprise Learning…”',
    },
    {
      id: 2,
      icon: '../../../../assets/images/iconSmall.png',
      name: 'Jane Doe',
      title: 'C.E.O, Orange Group',
      testimony:
        '“Learning Needs Lauren Waldman. Her Willingness To Challenge The Status Quo; Pairing Neuroscience With An Evidence-Based Approach To Enterprise Learning…”',
    },
    {
      id: 3,
      icon: '../../../../assets/images/iconSmall.png',
      name: 'Jude Omenka',
      title: 'COO, Etech Data Services',
      testimony:
        '“Learning Needs Lauren Waldman. Her Willingness To Challenge The Status Quo; Pairing Neuroscience With An Evidence-Based Approach To Enterprise Learning…”',
    },
    {
      id: 4,
      icon: '../../../../assets/images/iconSmall.png',
      name: 'Smith McBright',
      title: 'HR Manager, BentoHR',
      testimony:
        '“Learning Needs Lauren Waldman. Her Willingness To Challenge The Status Quo; Pairing Neuroscience With An Evidence-Based Approach To Enterprise Learning…”',
    },
    {
      id: 3,
      icon: '../../../../assets/images/iconSmall.png',
      name: 'Jude Omenka',
      title: 'COO, Etech Data Services',
      testimony:
        '“Learning Needs Lauren Waldman. Her Willingness To Challenge The Status Quo; Pairing Neuroscience With An Evidence-Based Approach To Enterprise Learning…”',
    },
    {
      id: 4,
      icon: '../../../../assets/images/iconSmall.png',
      name: 'Smith McBright',
      title: 'HR Manager, BentoHR',
      testimony:
        '“Learning Needs Lauren Waldman. Her Willingness To Challenge The Status Quo; Pairing Neuroscience With An Evidence-Based Approach To Enterprise Learning…”',
    },
  ];

  // slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}

  toTop() {
    document.getElementById('about')!.scrollIntoView();
  }
}
