import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OnInitDemoComponent } from "./on-init/on-init-demo/on-init-demo.component";
import { OnInitComponent } from "./on-init/on-init.component";
import { OnChangesComponent } from './on-changes/on-changes/on-changes.component';
import { OnChangesDemoComponent } from './on-changes/on-changes-demo/on-changes-demo.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        OnInitComponent,
        OnInitDemoComponent,
        OnChangesComponent,
        OnChangesDemoComponent
    ],
    exports: [
        OnInitComponent,
        OnInitDemoComponent,
        OnChangesComponent,
        OnChangesDemoComponent
    ]
})
export class LifecycleModule{}