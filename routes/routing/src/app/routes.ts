import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProtectedComponent } from './protected/protected.component';

export const routes: Routes = [
    // basic routes
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contactus', redirectTo: 'contact' },
    // authentication routes
    { path: 'login', component: LoginComponent },
    {
      path: 'protected',
      component: ProtectedComponent,
      canActivate: [ LoggedInGuard ]
    },
    // nested
    {
      path: 'products',
      component: ProductsComponent,
    //   children: childRoutes
    },
    { path: 'product/:id', component: ProductComponent }
  ]