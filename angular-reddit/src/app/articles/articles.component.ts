import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  constructor() { 
    this.articles = [{
        name: 'Angular 2',
        website: 'https://angular.io',
        points: 3
      },
      {
        name: 'Fullstack',
        website: 'https://fullstack.io',
        points: 2
      },
      {
        name: 'Angular Homepage',
        website: 'https://angular.io',
        points: 1
      }
    ]
  }

  ngOnInit(): void {
  }

}
