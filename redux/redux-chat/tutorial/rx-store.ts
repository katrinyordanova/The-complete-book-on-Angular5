import { BehaviorSubject, Subject } from "rxjs";

export interface Action {
    type: string;
    payload?: any
}

export interface Reducer<T> {
    (state: T, action: Action): T;
}

class Store<T> extends BehaviorSubject<T> {
    private _dispatcher: Subject<Action>;

    constructor(
        private _reducer: Reducer<T>,
        initialState: T
    ) {
        super(initialState);
        this._dispatcher = new Subject<Action>();
        this._dispatcher
        .scan((state: T, action: Action) =>
            this._reducer(state, action),
        initialState)
        .subscribe((state) => super.next(state));
    }

    getState() {
        return this.value;
    }

    dispatch(action: Action) {
        this._dispatcher.next(action);
    }
}