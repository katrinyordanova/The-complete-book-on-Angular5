import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sku = new FormControl('');

  public onSubmit() {
    console.log(this.sku.value);
  }
}
