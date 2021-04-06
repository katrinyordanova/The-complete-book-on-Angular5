import {
    Action,
    Reducer,
    Store,
    createStore
} from 'redux';
import { AddMessageAction, AppState, DeleteMessageAction } from './messages-reducer';

let initialState: AppState = { messages: [] };

let reducer: Reducer<AppState> = 
    (state: AppState = initialState, action: Action) => {
        switch (action.type) {
            case 'ADD_MESSAGE':
              return {
                messages: state.messages.concat((<AddMessageAction>action).message),
              };
            case 'DELETE_MESSAGE':
              let idx = (<DeleteMessageAction>action).index;
              return {
                messages: [
                  ...state.messages.slice(0, idx),
                  ...state.messages.slice(idx + 1, state.messages.length)
                ]
              };
            default:
              return state;
        }
    }

let store: Store<AppState> = createStore<AppState>(reducer)