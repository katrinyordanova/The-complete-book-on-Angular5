import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-native-encapsulation',
  template: `
    <h4 class="ui horizontal divider header">
      Native encapsulation example
    </h4>
    <div class="highlight">
      This component uses <code>ViewEncapsulation.Native</code>
    </div>
  `,
  styles: [`
    .highlight {
      text-align: center;
      border: 2px solid black;
      border-radius: 3px;
      margin-bottom: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class NativeEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
