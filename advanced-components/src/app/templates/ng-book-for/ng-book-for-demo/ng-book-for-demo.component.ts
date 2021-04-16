import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-book-for-demo',
  templateUrl: './ng-book-for-demo.component.html',
  styleUrls: ['./ng-book-for-demo.component.scss']
})
export class NgBookForDemoComponent implements OnInit {
  people: any[];

  constructor() { }

  ngOnInit() {
    this.people = [
      {name: 'Joe', age: 10},
      {name: 'Patrick', age: 21},
      {name: 'Melissa', age: 12},
      {name: 'Kate', age: 19}
    ];
  }

  remove(person): void {
    const index: number = this.people.indexOf(person);
    this.people.splice(index, 1);
  }

  add(name, age): void {
    this.people.push({ name: name, age: age });
    name = '';
    age = '';
  }
}
