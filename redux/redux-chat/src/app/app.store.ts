import { InjectionToken } from "@angular/core";
import { compose, createStore, Store, StoreEnhancer } from "redux";
import { AppState, default as reducer } from "./app.reducer";

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> = 
    window['devToolsExtension'] ? 
    window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
    return createStore<AppState, any, any, any> (
        reducer,
        compose(devtools)
    );
}

export const appStoreProviders = [
    { provide: AppStore, userFactory: createAppStore }
]