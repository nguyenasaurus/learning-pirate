import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/interfaces/home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  partners: Partner[] = [];

  constructor(private homeService: HomeService) {
    this.homeService.getPartners().subscribe((res: Partner[]) => {
      this.partners = res;
    });
  }

  ngOnInit(): void {}
}
