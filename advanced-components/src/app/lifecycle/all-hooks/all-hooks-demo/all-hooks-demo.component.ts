import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-hooks-demo',
  templateUrl: './all-hooks-demo.component.html',
  styleUrls: ['./all-hooks-demo.component.scss']
})
export class AllHooksDemoComponent implements OnInit {
  displayAfters: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleAfters(): void {
    this.displayAfters = !this.displayAfters;
  }
}
