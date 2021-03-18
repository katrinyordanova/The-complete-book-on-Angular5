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

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
   }

  ngOnInit(): void { }

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product) {
    if(!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
