import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onProductSelected: EventEmitter<Product>;
  constructor() { }

  ngOnInit(): void {
    this.onProductSelected = new EventEmitter();
  }

  public tralala() {
    this.onProductSelected.emit()
  }
}
