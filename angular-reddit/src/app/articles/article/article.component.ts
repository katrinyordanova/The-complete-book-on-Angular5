import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  ngOnInit(): void {
  }

  public removeWebsiteProtocol() {
    return this.article.website.substr(8);
  }

  onUpVote() {
    this.article.votes++;
  }

  onDownVote() {
    this.article.votes--;
  }
}
