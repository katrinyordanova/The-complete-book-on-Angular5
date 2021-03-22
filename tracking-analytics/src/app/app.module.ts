import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnalyticsService } from './services/analytics.service';
import { AnalyticsImplementation, Metric } from './analytics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ 
    { 
      provide: AnalyticsService,
      useFactory() {
        const loginImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is' + metric);
          }
        }
        return new AnalyticsService(loginImplementation);
      } 
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
