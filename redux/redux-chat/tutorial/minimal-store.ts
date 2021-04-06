import { Action, Reducer } from "./identity-reducer";
import { reducer } from "./plus-action";

export class Store<T> {
    private _state: T;

    constructor(
        private reducer: Reducer<T>,
        initialState: T
    ) {
        this._state = initialState;
    }

    getState(): T {
        return this._state;
    }

    dispatch(action: Action) {
        this._state = this.reducer(this._state, action);
    }
}

let store = new Store<number>(reducer, 0);
console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'PLUS' });