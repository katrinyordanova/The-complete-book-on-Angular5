import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgBookIfDemoComponent } from "./ng-book-if/ng-book-if-demo/ng-book-if-demo.component";
import { NgBookIfDirective } from "./ng-book-if/ng-book-if.directive";

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        NgBookIfDemoComponent,
        NgBookIfDirective
    ],
    exports: [
        NgBookIfDemoComponent,
        NgBookIfDirective
    ]
})
export class TemplatesModule{}