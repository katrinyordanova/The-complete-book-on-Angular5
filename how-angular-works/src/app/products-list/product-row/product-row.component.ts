import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }
}
