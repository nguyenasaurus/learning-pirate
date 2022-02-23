import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
})
export class HeaderTwoComponent implements OnInit {
  logo = '../../../../assets/images/logo.png';

  list = [
    { title: 'About', url: '/about' },
    { title: 'Learning Design', url: '/learning-design' },
    { title: 'Speaking', url: '/speaking' },
    { title: 'Media', url: '/media' },
    // { title: 'FAQ', url: '/faqs' },
    { title: 'Contact Me', url: '/contact-me' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
