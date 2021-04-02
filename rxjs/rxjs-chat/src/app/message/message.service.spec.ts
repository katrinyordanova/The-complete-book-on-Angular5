import { TestBed, inject } from '@angular/core/testing';

import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';
import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('should test', () =>{
    const user: User = new User('Nate', '');
    const thread: Thread = new Thread('t1', 'Nate', '');
    const m1: Message = new Message({
      author: user,
      text: 'Hi!',
      thread: thread
    });

    const m2: Message = new Message({
      author: user,
      text: 'Bye!',
      thread: thread
    });

    const messagesService: MessageService = new MessageService();

    // listen to each message individually as it comes in
    messagesService.newMessages.subscribe((message: Message) => {
      console.log('=> newMessages: ', + message.text);
    });

    // listen to the stream of the most current messages
    messagesService.messages.subscribe((messages: Message[]) => {
      console.log('=> messages: ' + messages.length);
    });

    messagesService.addMessage(m1);
    messagesService.addMessage(m2);
  });
});
