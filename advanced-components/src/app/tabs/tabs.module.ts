import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContentTabsDemoComponent } from "./content-tabs-demo/content-tabs-demo.component";
import { ContentTabsetComponent } from './content-tabs-demo/content-tabset/content-tabset.component';
import { ContentTabComponent } from './content-tabs-demo/content-tab/content-tab.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        ContentTabsDemoComponent,
        ContentTabsetComponent,
        ContentTabComponent
    ],
    exports: [
        ContentTabsDemoComponent,
        ContentTabsetComponent,
        ContentTabComponent
    ]
})
export class TabsModule{}