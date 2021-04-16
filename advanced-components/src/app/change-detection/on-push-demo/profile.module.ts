import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ObservableChangeDetectionComponent } from "../observable-demo/observable-change-detection/observable-change-detection.component";
import { ObservablesDemoComponent } from "../observable-demo/observables-demo/observables-demo.component";

import { DefaultChangeDetectionComponent } from "./default-change-detection/default-change-detection.component";
import { OnPushChangeDetectionComponent } from "./on-push-change-detection/on-push-change-detection.component";
import { OnPushDemoComponent } from "./on-push-demo/on-push-demo.component";

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
        DefaultChangeDetectionComponent,
        OnPushChangeDetectionComponent,
        OnPushDemoComponent,
        ObservableChangeDetectionComponent,
        ObservablesDemoComponent
    ],
    exports: [
        DefaultChangeDetectionComponent,
        OnPushChangeDetectionComponent,
        OnPushDemoComponent,
        ObservableChangeDetectionComponent,
        ObservablesDemoComponent
    ]
})
export class ProfileModule{}