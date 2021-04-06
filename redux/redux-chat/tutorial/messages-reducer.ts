import { Action, Reducer } from "./identity-reducer";
import { Store } from './minimal-store';

export interface AppState {
    messages: string[];
}

export interface AddMessageAction extends Action {
    message: string
}

export interface DeleteMessageAction extends Action {
    index: number
}

let reducer: Reducer<AppState> = 
    (state: AppState, action: Action): AppState => {
        switch(action.type) {
            case 'ADD_MESSAGE':
                return {
                    messages: state.messages.concat(
                        (<AddMessageAction>action).message
                    ),
                };
            case 'DELETE_MESSAGE':
                let index = (<DeleteMessageAction>action).index;
                return {
                    messages: [
                        ...state.messages.slice(0, index),
                        ...state.messages.slice(index + 1, state.messages.length)
                    ]
                }
            default: return state;
        }
    }

let store = new Store<AppState>(reducer, { messages: [] });

store.dispatch({
    type: 'ADD_MESSAGE',
    message: 'Adding new message' 
} as AddMessageAction);

store.dispatch({
    type: 'DELETE_MESSAGE',
    index: 2
} as DeleteMessageAction);