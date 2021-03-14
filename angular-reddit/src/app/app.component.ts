import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reddit';

  form = new FormGroup({
    title: new FormControl(''),
    link: new FormControl('')
  });
  
  onSubmit() {

  }
}
