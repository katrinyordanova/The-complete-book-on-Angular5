import { ComponentFixture, TestBed, tick } from "@angular/core/testing";
import { ActivatedRoute, provideRoutes, Router, Routes } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';

import { MockSpotifyService } from "./spotify.service.mock";
import { routes } from '../routes';
import { Component } from "@angular/core";

@Component({
    selector: 'blank-cpm',
    template: ''
})
export class BlankComp {

}

@Component({
    selector: 'root-cpm',
    template: `<router-outlet></router-outlet>`
})
export class RootCmp{}

export function configureMusicTests() {
    const mockSpotifyService: MockSpotifyService = new MockSpotifyService();
    
    TestBed.configureTestingModule({
        imports: [
            {
                ngModule: RouterTestingModule,
                providers: [provideRoutes(routes)]
            },
            TestModule
        ],
        providers: [
            mockSpotifyService.getProviders(),
            {
                provide: ActivatedRoute,
                useFactory: (r: Router) => r.routerState.root, deps: [ Router ]
            }
        ]
    });
}

export function advance(fixture: ComponentFixture<any>): void {
    tick();
    fixture.detectChanges();
}

export function createRoot(router: Router, componentType: any): ComponentFixture<any> {
    const f = TestBed.createComponent(componentType);
    advance(f);
    (<any>router).initialNavigation();
    advance(f);
    return f;
}

export class TestModule{}