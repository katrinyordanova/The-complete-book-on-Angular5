import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { HeaderComponent } from './header/header.component';
import { routes } from './routes';
import { LoadingComponent } from './loading/loading.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AUTH_PROVIDERS, LoggedInGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
