import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo = '../../../../assets/images/logo.png';

  list = [
    { title: 'Learning Design', url: '/learning-design' },
    { title: 'Speaking', url: '/speaking' },
    // { title: 'Media', url: '/media' },
    { title: 'About', url: '/about' },
    // { title: 'FAQ', url: '/faqs' },
    { title: 'Contact Me', url: '/contact-me' },
  ];

  constructor() {}

  ngOnInit(): void {}

  fetchData() {}
}
