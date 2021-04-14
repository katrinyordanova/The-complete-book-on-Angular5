import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes-demo',
  templateUrl: './on-changes-demo.component.html',
  styleUrls: ['./on-changes-demo.component.scss']
})
export class OnChangesDemoComponent implements OnInit {
  display: boolean;
  name: string;
  comment: string;

  constructor() { }

  ngOnInit(): void {
    this.display = true;
    this.name = 'Felipe Coury',
    this.comment = 'I am learning so much!';
  }

  setValues(nameFieldId, commentFieldId): void {
    this.name = nameFieldId.value;
    this.comment = commentFieldId.value;
  }

  toggle(): void {
    this.display = !this.display;
  }
}
