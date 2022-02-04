import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  socials = [
    {
      icon: '../../../../assets/images/twitter.svg',
      url: 'https://twitter.com',
    },
    {
      icon: '../../../../assets/images/instagram.svg',
      url: 'https://instagram.com',
    },
    {
      icon: '../../../../assets/images/linkedin.svg',
      url: 'https://linkedin.com',
    },
  ];

  linksOne = [
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Private Coaching',
      url: '/private-coaching',
    },
    {
      title: 'Membership',
      url: '/membership',
    },
    {
      title: 'Podcast',
      url: '/podcast',
    },
  ];

  linksTwo = [
    {
      title: 'Media',
      url: '/media',
    },
    {
      title: 'Contact',
      url: '/contact-me',
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
    },
    {
      title: 'Terms & Conditions',
      url: '/terms-conditions',
    },
  ];

  contacts = [
    {
      url: 'lauren@gmail.com',
      title: 'Lauren@gmail.com',
      icon: 'ri-send-plane-fill',
    },
    { url: '+19348903468', title: '+1 934 890 3468', icon: 'ri-phone-fill' },
  ];

  year = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
