import { Action } from "redux";
import { Thread } from "./thread";
import * as ThreadAction from './thread.actions';

export interface ThreadsEntities {
    [id: string]: Thread;
}

export interface ThreadsState {
    ids: string[];
    entities: ThreadsEntities;
    currentThreadId?: string;
}

const initialState: ThreadsState = {
    ids: [],
    currentThreadId: null,
    entities: {}
}

export const ThreadReducer = 
    function(state: ThreadsState = initialState, action: Action) {
        switch(action.type) {
            case ThreadAction.ADD_THREAD: {
                const thread = (<ThreadAction.AddThreadAction>action).thread;

                if(state.ids.includes(thread.id)) {
                    return state;
                }

                return {
                    ids: [ ...state.ids, thread.id ],
                    currentThreadId: state.currentThreadId,
                    entities: Object.assign({}, state.entities, { [thread.id]: thread} )
                }
            }
        }
    }