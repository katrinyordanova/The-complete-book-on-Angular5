import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InlineSyleComponent } from './inline-syle/inline-syle.component';


@NgModule({
  declarations: [
    AppComponent,
    InlineSyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
