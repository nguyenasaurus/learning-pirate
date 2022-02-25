import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { About, AboutCta } from 'src/app/interfaces/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  breadcrumbTitle = '<h1>YARR</h1><h2><span>You Are Really Ready</span></h2>';

  qualifications = [
    'Foundations of Neuroscience (Harvardx)',
    'Medical Neuroscience (Duke)',
    'Double certified as a learning designer (CTDP)',
  ];

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

  constructor(private titleService: Title, private aboutService: AboutService) {
    this.titleService.setTitle(this.title);

    this.aboutService.getById(this.sectionOneId).subscribe((res: About) => {
      this.sectionOne = res;
    });

    this.aboutService.getById(this.sectionTwoId).subscribe((res: AboutCta) => {
      this.sectionTwo = res;
      console.log(this.sectionTwo);
    });
  }

  ngOnInit(): void {}
}
