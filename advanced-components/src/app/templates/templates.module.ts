import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgBookIfDemoComponent } from "./ng-book-if/ng-book-if-demo/ng-book-if-demo.component";
import { NgBookIfDirective } from "./ng-book-if/ng-book-if.directive";
import { NgBookForDemoComponent } from './ng-book-for/ng-book-for-demo/ng-book-for-demo.component';
import { NgBookForDirective } from "./ng-book-for/ng-book-for.directive";


@NgModule({
    imports: [ CommonModule ],
    declarations: [
        NgBookIfDemoComponent,
        NgBookForDemoComponent,
        NgBookIfDirective,
        NgBookForDirective
    ],
    exports: [
        NgBookIfDemoComponent,
        NgBookForDemoComponent,
        NgBookIfDirective,
        NgBookForDirective
    ]
})
export class TemplatesModule{}