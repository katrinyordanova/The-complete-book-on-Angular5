import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InlineStyleComponent } from './styling/inline-style/inline-style.component';
import { ExternalStyleComponent } from './styling/external-style/external-style.component';
import { NativeEncapsulationComponent } from './styling/native-encapsulation/native-encapsulation.component';
import { NoEncapsulationComponent } from './styling/no-encapsulation/no-encapsulation.component';


@NgModule({
  declarations: [
    AppComponent,
    InlineStyleComponent,
    ExternalStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
