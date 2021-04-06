import { Action, Reducer } from "./identity-reducer";
import { reducer } from "./plus-action";

interface ListenerCallback {
    (): void;
}

interface UnsubscribeCallback {
    (): void;
}

class Store<T> {
    private _state: T;
    private _listeners: ListenerCallback[] = [];

    constructor(
        private reducer: Reducer<T>,
        initialState: T
    ) {
        this._state = initialState;
    }

    getState() {
        return this._state;
    }

    subscribe(listener: ListenerCallback): UnsubscribeCallback {
        this._listeners.push(listener);
        return () => {
            this._listeners = this._listeners.filter(l => l !== listener);
        }
    }

    dispatch(action: Action): void {
        this._state = this.reducer(this._state, action);
        this._listeners.forEach((listener: ListenerCallback) => listener());
    }
}

let store = new Store<number>(reducer, 67);

let unsubscribe = store.subscribe(() => {
    console.log('subscribed: ', store.getState());
});

store.dispatch({ type: 'INCREMENT' });