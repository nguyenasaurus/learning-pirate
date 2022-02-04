import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  partners = [
    { icon: '../../../../assets/images/lighting.png', url: '' },
    { icon: '../../../../assets/images/liva.png', url: '' },
    { icon: '../../../../assets/images/utosia-2.png', url: '' },
    { icon: '../../../../assets/images/earth-2.0.png', url: '' },
    { icon: '../../../../assets/images/asgardia.png', url: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
