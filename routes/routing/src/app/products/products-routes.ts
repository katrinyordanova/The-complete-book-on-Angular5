import { Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { MainComponent } from './main/main.component';
import { MoreInfoComponent } from './more-info/more-info.component';

export const productsRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'more-info', component: MoreInfoComponent },
    { path: ':id', component: ProductComponent }
]