import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loading: boolean;
  data: Object;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  makePost(): void {
    this.loading = true;
    this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      })
    ).subscribe(post => {
      this.data = post;
      this.loading = false;
    });
  }

  makeDelete(): void {
    this.loading = true;
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(data => {
      this.data = data;
      this.loading = false;
    })
  }

  makeHeaders(): void {
    const headers: HttpHeaders = new HttpHeaders({
      'X-API-TOKEN': 'ng-book'
    });

    const req = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        headers: headers
      }
    );

    this.http.request(req).subscribe(data => {
      this.data = data['body'];
    });
  }
}
