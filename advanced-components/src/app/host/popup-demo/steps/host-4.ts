import { NgModule } from '@angular/core';
import {
  Component,
  Input,
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup',
})
export class PopupDirective {
  @Input() message: String;

  constructor(_elementRef: ElementRef) {
    console.log(_elementRef);
  }

  @HostListener('click') displayMessage(): void {
    alert(this.message);
  }
}

@Component({
  selector: 'app-popup-demo4',
  template: `
  <div class="ui message" popup #popup1="popup"
       message="Clicked the message">
    <div class="header">
      Learning Directives
    </div>
    <p>
      This should use our Popup directive
    </p>
  </div>
  <i class="alarm icon" popup #popup2="popup"
     message="Clicked the alarm icon"></i>
  <div style="margin-top: 20px;">
    <button (click)="popup1.displayMessage()" class="ui button">
      Display popup for message element
    </button>
    <button (click)="popup2.displayMessage()" class="ui button">
      Display popup for alarm icon
    </button>
  </div>
  `
})
export class PopupDemoComponent4 {
}

@NgModule({
  declarations: [
    PopupDemoComponent4,
    PopupDirective
  ],
  exports: [ PopupDemoComponent4 ]
})
export class PopupDemoComponent4Module {}