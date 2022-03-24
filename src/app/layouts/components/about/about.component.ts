import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { About, AboutCta, Qualification } from 'src/app/interfaces/about';
import { Bod } from 'src/app/interfaces/bod';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  breadcrumbTitle =
    "<div class='bc-title'><h3 class='white-color'>Reach your peak <br>I'll help you <span>get there</span></h3></div>";

  board = [
    {
      name: 'Dr.Soracha Cashman',
      title: 'Cognitive Neuropsychologist',
      icon: '../../../../assets/images/about/cashman.png',
    },
    {
      name: 'Dr. Elliot Jardin',
      title: 'Cognitive Neuroscientist/Assistant Professor',
      icon: '../../../../assets/images/about/jardin.png',
    },
    {
      name: 'Dr. Nick Hobson',
      title: 'Behavioral Scientist',
      icon: '../../../../assets/images/about/hobson.png',
    },
    {
      name: 'Carolyn Davison',
      title:
        'Ph.D. Candidate (Psychology: Perception/Cognition/Cognitive Neuroscience)',
      icon: '../../../../assets/images/about/davidson.png',
    },
    {
      name: 'Dr. Kinga Eliasz',
      title: 'Cognitive And Behavioral Research Scientist',
      icon: '../../../../assets/images/about/eliasz.png',
    },
    {
      name: 'Dr. Celine Mullins',
      title: 'Psychologist',
      icon: '../../../../assets/images/about/mullins.png',
    },
    {
      name: 'Kendelle Bond',
      title: 'Behavioural Psychologist',
      icon: '../../../../assets/images/about/bond.png',
    },
  ];

  title = 'About';

  sectionOne: About = {};
  sectionOneId = 'sectionOne';
  canEditSectionOne = false;

  sectionTwo: AboutCta = {};
  sectionTwoId = 'sectionCta';
  canEditSectionTwo = false;
  chosenItemTwo: any;

  qualifications: Qualification[] = [];
  bods: Bod[] = [];

  constructor(private titleService: Title, private aboutService: AboutService) {
    this.titleService.setTitle(this.title);

    this.aboutService.getById(this.sectionOneId).subscribe((res: About) => {
      this.sectionOne = res;
    });

    this.aboutService.getQualifications().subscribe((res: Qualification[]) => {
      this.qualifications = res;
    });

    this.aboutService.getBods().subscribe((res: Bod[]) => {
      this.bods = res;
    });

    this.aboutService.getById(this.sectionTwoId).subscribe((res: AboutCta) => {
      this.sectionTwo = res;
    });
  }

  ngOnInit(): void {}
}
