import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, MoreInfoComponent, ProductComponent]
})
export class ProductsModule { }
