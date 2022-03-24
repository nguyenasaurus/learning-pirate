import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Partner } from 'src/app/interfaces/home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-partners-filter',
  templateUrl: './partners-filter.component.html',
  styleUrls: ['./partners-filter.component.scss'],
})
export class PartnersFilterComponent implements OnInit {
  buttons = ['Technology', 'Finance', 'Education', 'Sports & Recreation'];

  partners: Partner[] = [];

  constructor(private homeService: HomeService) {
    this.homeService.getPartners().subscribe((res: Partner[]) => {
      this.partners = res;
    });
  }

  ngOnInit(): void {}

  toggleButtons() {
    $('.btn-outline').on('click', function () {
      $('.btn-outline').removeClass('active');
      $(this).addClass('active');
    });
  }
}
