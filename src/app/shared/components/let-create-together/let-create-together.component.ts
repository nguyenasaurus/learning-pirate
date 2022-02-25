import { Component, OnInit } from '@angular/core';
import { AboutCta } from 'src/app/interfaces/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-let-create-together',
  templateUrl: './let-create-together.component.html',
  styleUrls: ['./let-create-together.component.scss'],
})
export class LetCreateTogetherComponent implements OnInit {
  sectionTwo: AboutCta = {};
  sectionTwoId = 'sectionCta';
  canEditSectionTwo = false;
  chosenItemTwo: any;

  constructor(private aboutService: AboutService) {
    this.aboutService.getById(this.sectionTwoId).subscribe((res: AboutCta) => {
      this.sectionTwo = res;
      console.log(this.sectionTwo);
    });
  }

  ngOnInit(): void {}
}
