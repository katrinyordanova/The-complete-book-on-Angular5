import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  
  constructor() { 
    this.articles = [{
        title: 'Angular 2',
        website: 'https://angular.io',
        votes: 3
      },
      {
        title: 'Fullstack',
        website: 'https://fullstack.io',
        votes: 2
      },
      {
        title: 'Angular Homepage',
        website: 'https://angular.io',
        votes: 1
      }
    ]
  }

  ngOnInit(): void {
  }
}
