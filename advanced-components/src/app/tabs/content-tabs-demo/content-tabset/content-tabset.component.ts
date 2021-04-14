import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ContentTabComponent } from '../content-tab/content-tab.component';

@Component({
  selector: 'tabset',
  templateUrl: './content-tabset.component.html',
  styleUrls: ['./content-tabset.component.scss']
})
export class ContentTabsetComponent implements OnInit {
  @ContentChildren(ContentTabComponent) tabs: QueryList<ContentTabComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: ContentTabComponent): void {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }
  
  ngOnInit() {
  }

}
