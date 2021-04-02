import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';

const initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable()
export class MessageService {
  // a stream that publishes new messages only once
  newMessages: Subject<Message> = new Subject<Message>();
  // emits an array of most recent messages
  messages: Observable<Message[]>;
  // receives _operations_ to be applied to our 'messages'
  // it's a way we can perform changes on *all* messages (that are currently)
  // stored in 'messages'
  updates: Subject<any> = new Subject<any>();

  // action streams
  create: Subject<any> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates
      .scan((messages: Message[], operation: IMessagesOperation) => {
        return operation(messages);
      }, initialMessages); 

    this.create.map((message: Message): IMessagesOperation => {
      return (messages: Message[]) => {
        return messages.concat(message);
      }
    })
    .subscribe(this.updates);

    this.newMessages.subscribe(this.create);

    this.markThreadAsRead.map((thread: Thread) => {
      return (messages: Message[]) => {
        return messages.map((message: Message) => {
          if(message.thread.id === thread.id) {
            message.isRead = true;
          }
          return message;
        });
      }
    })
    .subscribe(this.updates);
  }

  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  messageForThreadUser(thread: Thread, user: User) {
    return this.newMessages.filter((message: Message) => {
      // belongs to the thread
      return (message.thread.id === thread.id) &&
              // and isn't authored by this user
              (message.author.id !== user.id);
    });
  }
}

export const messageServiceInjectables: Array<any> = [ MessageService ];
