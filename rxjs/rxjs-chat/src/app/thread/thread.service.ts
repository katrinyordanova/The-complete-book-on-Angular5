import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../message/message.model';

import { MessageService } from '../message/message.service';
import { Thread } from './thread.model';

@Injectable()
export class ThreadService {
  threads: Observable<{ [key: string]: Thread }>;

  constructor(public messageService: MessageService) {
    this.threads = messageService.messages
      .map((messages: Message[]) => {
        const threads: {[key: string]: Thread} = {};
        // Store the message's thread in our accumulator 'threads'
        messages.map((message: Message) => {
          threads[message.thread.id] = threads[message.thread.id] ||
            message.thread;

            // Cache the most recent message for each thread
            const messagesThread: Thread = threads[message.thread.id];
            if(!messagesThread.lastMessage ||
              messagesThread.lastMessage.sentAt < message.sentAt) {
                messagesThread.lastMessage = message;
            }
        });
        return threads;
      }
    );
  }
}

export const threadsServiceInjectables: Array<any> = [
  ThreadService
];
