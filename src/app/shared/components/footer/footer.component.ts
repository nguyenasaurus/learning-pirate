import { Component, OnInit } from '@angular/core';
import { SocialMedia } from 'src/app/interfaces/home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  linksOne = [
    { title: 'About', url: '/about' },
    { title: 'Learning Design', url: '/learning-design' },
    { title: 'Speaking', url: '/speaking' },
    { title: 'Contact', url: '/contact-me' },
    // { title: 'Media', url: '/media', },
  ];

  // linksTwo = [
  //   {title: 'Contact', url: '/contact-me'},
  //   {
  //     title: 'Privacy Policy',
  //     url: '/',
  //   },
  // ];

  contacts = [
    {
      url: 'lauren@gmail.com',
      title: 'Lauren@gmail.com',
      icon: 'ri-send-plane-fill',
    },
    { url: '+19348903468', title: '+1 934 890 3468', icon: 'ri-phone-fill' },
  ];

  year = new Date().getFullYear();

  socials: SocialMedia[] = [];

  constructor(private homeService: HomeService) {
    this.homeService.getSocialMediaPages().subscribe((res: SocialMedia[]) => {
      this.socials = res;
    });
  }

  ngOnInit(): void {}
}
