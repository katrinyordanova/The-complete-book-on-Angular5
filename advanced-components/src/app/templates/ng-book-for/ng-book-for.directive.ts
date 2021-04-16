import { Directive, DoCheck, Input, IterableDiffer, IterableDiffers, TemplateRef, ViewContainerRef, ViewRef } from "@angular/core";

@Directive({
    selector: '[ngBookFor]'
})
export class NgBookForDirective implements DoCheck {
    private items: any;
    private differ: IterableDiffer<any>;
    private views: Map<any, ViewRef> = new Map<any, ViewRef>();

    constructor(
        private viewContainer: ViewContainerRef,
        private template: TemplateRef<any>,
        private differs: IterableDiffers
    ) {}

    @Input() set ngBookForOf(item) {
        this.items = item;
        this.differ = this.differs.find([]).create();
    }

    ngDoCheck(): void {
        if(this.differ) {
            const changes = this.differ.diff(this.items);
            if(changes) {
                changes.forEachAddedItem(change => {
                    const view = this.viewContainer.createEmbeddedView(
                        this.template,
                        { $implicit: change.item }
                    );
                    this.views.set(change.item, view);
                });
                changes.forEachRemovedItem(change => {
                    const view = this.views.get(change.item);
                    const idx = this.viewContainer.indexOf(view);
                    this.viewContainer.remove(idx);
                    this.views.delete(change.item);
                })
            }
        }
    }
}