import { Action, Reducer } from "./identity-reducer";

export let reducer: Reducer<number> = (state: number, action: Action) => {
    switch(action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'PLUS': return state + action.payload;
        default: return state;
    }
}

let plusAction: Action = { type: 'PLUS', payload: 78 };
console.log(reducer(99, plusAction));