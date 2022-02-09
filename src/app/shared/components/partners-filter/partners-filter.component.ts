import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-partners-filter',
  templateUrl: './partners-filter.component.html',
  styleUrls: ['./partners-filter.component.scss'],
})
export class PartnersFilterComponent implements OnInit {
  partners = [
    { icon: '../../../../assets/images/speaking/lighting.png', url: '' },
    { icon: '../../../../assets/images/speaking/liva.png', url: '' },
    { icon: '../../../../assets/images/speaking/utosia-2.png', url: '' },
    { icon: '../../../../assets/images/speaking/earth-2.0.png', url: '' },
    { icon: '../../../../assets/images/speaking/asgardia.png', url: '' },
  ];

  buttons = ['Technology', 'Finance', 'Education', 'Sports & Recreation'];

  constructor() {}

  ngOnInit(): void {}

  toggleButtons() {
    $('.btn-outline').on('click', function () {
      $('.btn-outline').removeClass('active');
      $(this).addClass('active');
    });
  }
}
