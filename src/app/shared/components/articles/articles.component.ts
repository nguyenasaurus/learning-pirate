import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles = [
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
  constructor() {}

  ngOnInit(): void {}
}
