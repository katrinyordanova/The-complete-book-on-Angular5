import { TestBed, inject } from '@angular/core/testing';

import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';
import { User } from '../user/user.model';
import { Thread } from './thread.model';
import { ThreadService } from './thread.service';
import * as _ from 'lodash';

describe('ThreadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreadService]
    });
  });

  it('should collect the threads from messages', () => {
    const nate: User = new User('Nate Murray', '');
    const felipe: User = new User('Felipe Coury', '');

    const t1: Thread = new Thread('t1', 'Thread 1', '');
    const t2: Thread = new Thread('t2', 'Thread 2', '');

    const m1: Message = new Message({
      author: nate,
      text: 'Hi!',
      thread: t1
    });

    const m2: Message = new Message({
      author: felipe,
      text: 'Where did you get that hat?',
      thread: t1
    });

    const m3: Message = new Message({
      author: nate,
      text: 'Did you bring the briefcase?',
      thread: t2
    });

    const messageService: MessageService = new MessageService();
    const threadService: ThreadService = new ThreadService(messageService);

    threadService.threads.subscribe((threadIndx: { [key: string]: Thread }) => {
      const threads: Thread[] = _.values(threadIndx);
      const threadNames: string = _.map(threads, (t: Thread) => t.name).join(', ');
      console.log(`=> threads (${threads.length}): ${threadNames}`);
    });

    messageService.addMessage(m1);
    messageService.addMessage(m2);
    messageService.addMessage(m3);
  });
});
