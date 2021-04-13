import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-message]',
  template: `
    <div class="header">
      {{ header }}
    </div> 
    <p>
      <ng-content></ng-content>
    </p> 
  `,
  styleUrls: ['./content-projection-demo.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() header: string;
  @HostBinding('attr.class') cssClass = 'ui message';

  constructor() { }

  ngOnInit(): void {
    console.log('header', this.header);
  }

}