import { Action, Reducer } from './identity-reducer';
import { AddMessageAction, AppState, DeleteMessageAction } from './messages-reducer';
import { Store } from './minimal-store';

export class MessageActions {
    static addMessage(message: string): AddMessageAction {
        return {
            type: 'ADD_MESSAGE',
            message: message,
            created_at: new Date()
        }
    }
    static deleteMessage(index: number): DeleteMessageAction {
        return {
            type: 'DELETE_MESSAGE',
            index
        }
    }
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
    
let store = new Store(reducer, { messages: [] });
store.dispatch(
    MessageActions.addMessage('Adding new message')
)