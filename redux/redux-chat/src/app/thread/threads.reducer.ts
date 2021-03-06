import { Action } from "redux";
import { createSelector } from 'reselect';
import { Message } from "../message/message";
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
            case ThreadAction.ADD_MESSAGE: {
                const thread = (<ThreadAction.AddMessageAction>action).thread;
                const message = (<ThreadAction.AddMessageAction>action).message;

                const isRead = message.thread.id === state.currentThreadId ?
                    true : message.isRead;
                const newMessage = Object.assign({}, message, { isRead: isRead });
                const oldThread = state.entities[thread.id];
                const newThread = Object.assign({}, oldThread, {
                    messages: [...oldThread.messages, newMessage]
                });

                return {
                    ids: state.ids,
                    currentThreadId: state.currentThreadId,
                    entities: Object.assign({}, state.entities, {
                        [thread.id]: newThread
                    })
                }
            }
            case ThreadAction.SELECT_THREAD: {
                const thread = (<ThreadAction.SelectThreadAction>action).thread;
                const oldThread = state.entities[thread.id];
                const newMessages = oldThread.messages.map(
                    (message) => Object.assign({}, message, { isRead: true })
                )
                const newThread = Object.assign({}, oldThread, {
                    messages: newMessages
                });

                return {
                    ids: state.ids,
                    currentThread: thread.id,
                    entities: Object.assign({}, state.entities, {
                        [thread.id]: newThread
                    })
                }
            }
            default: return state;
        }
    }

export const getThreadState = (state): ThreadsState => state.threads;

export const getThreadEntities = createSelector(
    getThreadState,
    (state: ThreadsState) => state.entities
)

export const getCurrentThread = createSelector(
    getThreadEntities,
    getThreadState,
    ( entities: ThreadsEntities, state: ThreadsState ) =>
      entities[state.currentThreadId] );

export const getAllThreads = createSelector(
    getThreadEntities,
    ( entities: ThreadsEntities ) => Object.keys(entities)
        .map((threadId) => entities[threadId])
)

export const getUnreadMessagesCount = createSelector(
    getAllThreads,
    ( threads: Thread[] ) => threads.reduce(
        (unreadCount: number, thread: Thread) => {
          thread.messages.forEach((message: Message) => {
            if (!message.isRead) {
              ++unreadCount;
            }
          });
          return unreadCount;
        },
    0)
);
  
export const getAllMessages = createSelector(
getAllThreads,
( threads: Thread[] ) =>
    threads.reduce( // gather all messages
    (messages, thread) => [...messages, ...thread.messages],
    []).sort((m1, m2) => m1.sentAt - m2.sentAt)); 