import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './content-tabs-demo.component.html',
  styleUrls: ['./content-tabs-demo.component.scss']
})
export class ContentTabsDemoComponent implements OnInit {
  tabs: any;
  constructor() { }

  ngOnInit() {
    this.tabs = [
      { title: 'About', content: 'This is the About tab' },
      { title: 'Blog', content: 'This is our blog' },
      { title: 'Contact us', content: 'Contact us here' },
    ];
  }

}
