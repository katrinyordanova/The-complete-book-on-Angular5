import { Reducer, Action } from "./identity-reducer";

let reducer: Reducer<number> = (state: number, action: Action) => {
    switch(action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}

let incrementAction: Action = { type: 'INCREMENT' };
console.log(reducer(5, incrementAction));
console.log(reducer(89, incrementAction));

let decrementAction: Action = { type:  'DECREMENT' };
console.log(reducer(55, decrementAction));

let unknownAction: Action = { type: 'UNKNOWN' };
console.log(reducer(0, unknownAction));