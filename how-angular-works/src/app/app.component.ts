import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'how-angular-works';
  products: Product[];

  constructor() {
    let newProduct = [
    new Product('NICEHAT',
      'A Nice Black Hat',
      '/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'], 
      29.99),
    new Product(
      'NEATOJACKET', 
      'Blue Jacket',
      '/assets/images/products/blue-jacket.jpg', 
      ['Women', 'Apparel', 'Jackets & Vests'], 
      238.99),
    new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/assets/images/products/black-hat.jpg', 
      ['Men', 'Accessories', 'Hats'], 
      29.99)
    ];
    
    this.products = newProduct;
  }

  productWasClicked(product: Product): void {
    console.log(`Product clicked: ${product}`);
  }
}
