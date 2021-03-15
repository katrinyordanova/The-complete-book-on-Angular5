import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Article } from './articles/article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Article[] = [];
  title = 'angular-reddit';
  
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
  form = new FormGroup({
    title: new FormControl(''),
    link: new FormControl('')
  });
  
  onSubmit(title: string, link: string) {
    console.log(`Adding article: ${title} and link: ${link}`);
    this.articles.push(new Article(title, link));
    this.form = new FormGroup({});
  }
}
