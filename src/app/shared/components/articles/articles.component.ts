import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  // articles = [
  //   {
  //     name: 'Dr.Soracha Cashman',
  //     title: 'Cognitive Neuropsychologist',
  //     icon: '../../../../assets/images/article/1.png',
  //   },
  //   {
  //     name: 'Dr. Elliot Jardin',
  //     title: 'Cognitive Neuroscientist/Assistant Professor',
  //     icon: '../../../../assets/images/article/2.png',
  //   },
  //   {
  //     name: 'Dr. Nick Hobson',
  //     title: 'Behavioral Scientist',
  //     icon: '../../../../assets/images/article/3.png',
  //   },
  //   {
  //     name: 'Carolyn Davison',
  //     title:
  //       'Ph.D. Candidate (Psychology: Perception/Cognition/Cognitive Neuroscience)',
  //     icon: '../../../../assets/images/article/4.png',
  //   },
  //   // {
  //   //   name: 'Dr. Kinga Eliasz',
  //   //   title: 'Cognitive And Behavioral Research Scientist',
  //   //   icon: '../../../../assets/images/article/5.png',
  //   // },
  // ];

  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
    this.articleService.getArticles().subscribe((res: Article[]) => {
      this.articles = res;
    });
  }

  ngOnInit(): void {}
}
