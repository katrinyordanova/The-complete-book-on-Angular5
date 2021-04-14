import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OnInitDemoComponent } from "./on-init/on-init-demo/on-init-demo.component";
import { OnInitComponent } from "./on-init/on-init.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        OnInitComponent,
        OnInitDemoComponent
    ],
    exports: [
        OnInitComponent,
        OnInitDemoComponent
    ]
})
export class LifecycleModule{}