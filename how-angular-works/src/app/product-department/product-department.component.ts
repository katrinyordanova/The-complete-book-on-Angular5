import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.scss']
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
