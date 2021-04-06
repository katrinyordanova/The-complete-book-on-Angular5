export interface Action {
    // action - INCREMENT | ADD_USER
    type: string;
    payload?: any
}

export interface Reducer<T> {
    // T is type of state
    (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
    return state;
}

console.log(reducer(0, null)); // -> 0
let incrementAction: Action = { type: 'INCREMENT' };
let decrementAction: Action = { type: 'DECREMENT' };