import { Thread } from "../thread/thread";
import { User } from "../user/user";

export interface Message {
    id: string;
    sentAt?: Date;
    isRead?: boolean;
    thread?: Thread;
    author: User;
    text: string;
}
