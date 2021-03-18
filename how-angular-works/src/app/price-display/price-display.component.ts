import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent implements OnInit {
  @Input() price;
  
  constructor() { }

  ngOnInit(): void {
  }

}
