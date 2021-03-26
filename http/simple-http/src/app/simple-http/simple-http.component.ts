import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.scss']
})
export class SimpleHttpComponent implements OnInit {
  responseData: Object;
  loader: boolean;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  makeRequest(): void {
    this.loader = true;
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(response => {
      this.responseData = response;
      this.loader = false;
    })
  }
}
