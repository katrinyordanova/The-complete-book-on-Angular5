import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HostModule } from './host/host.module';
import { TabsModule } from './tabs/tabs.module';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { StylingModule } from './styling/styling.module';
import { TemplatesModule } from './templates/templates.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentProjectionModule,
    StylingModule,
    HostModule,
    TabsModule,
    LifecycleModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
