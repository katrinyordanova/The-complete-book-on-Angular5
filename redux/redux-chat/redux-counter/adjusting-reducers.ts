import { Action, Reducer } from "./identity-reducer";

let reducer: Reducer<number> = (state: number, action: Action) => {
    if(action.type === 'INCREMENT') {
        return state + 1;
    }if(action.type === 'DECREMENT') {
        return state - 1;
    }
    return state;
}

let incrementAction: Action = { type: 'INCREMENT' };
console.log(reducer(0, incrementAction));
let decrementAction: Action = { type: 'DECREMENT' };
console.log(reducer(5, decrementAction));