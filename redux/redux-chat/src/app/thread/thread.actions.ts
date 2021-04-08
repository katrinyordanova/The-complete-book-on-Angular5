import { Action, ActionCreator } from "redux";
import { Message } from "../message/message";
import { uuid } from "../utils/uuid";
import { Thread } from "./thread";

export const ADD_THREAD = '[Thread] Add';
export interface AddThreadAction extends Action {
    thread: Thread;
}
export const addThread: ActionCreator<AddThreadAction> =
    (thread) => ({
        type: ADD_THREAD,
        thread: thread
    });

export const ADD_MESSAGE = '[Thread] Add Message';
export interface AddMessageAction extends Action {
    thread: Thread;
    message: Message;
}

export const addMessage: ActionCreator<AddMessageAction> =
    (thread: Thread, messageArgs: Message): AddMessageAction => {
        const defaults = {
            id: uuid(),
            sentAt: new Date(),
            isRead: false,
            thread: thread
        };
        const message: Message = Object.assign({}, defaults, messageArgs);

        return {
            type: ADD_MESSAGE,
            thread: thread,
            message: message
        }
    }