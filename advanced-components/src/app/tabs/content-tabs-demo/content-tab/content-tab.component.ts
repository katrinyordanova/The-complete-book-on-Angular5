import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-tab',
  templateUrl: './content-tab.component.html',
  styleUrls: ['./content-tab.component.scss']
})
export class ContentTabComponent implements OnInit {
  @Input() title: string;
  active: boolean = false;
  name: string;
  
  constructor() { }

  ngOnInit() {
  }

}
