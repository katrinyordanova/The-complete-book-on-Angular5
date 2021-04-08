import { Message } from "../message/message";

export interface Thread {
    id: string;
    name: string;
    avatarSrc: string;
    messages: Message[];
}