import { Component, OnInit } from '@angular/core';

import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';
import { Thread } from '../thread/thread.model';
import { ThreadService } from '../thread/thread.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.scss']
})
export class ChatNavBarComponent implements OnInit {
  unreadMessagesCount: number;

  constructor(
    public messageService: MessageService,
    public threadService: ThreadService
  ) { }

  ngOnInit() {
    this.messageService.messages
      .combineLatest(
        this.threadService.currentThread,
        (messages: Message[], currentThread: Thread) =>
          [currentThread, messages]
        )
      .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
        this.unreadMessagesCount = _.reduce(
          messages, (sum: number, message: Message) => {
            const messageIsInCurrentThread: boolean = message.thread &&
              currentThread &&
              (currentThread.id === message.thread.id);

              if(message && !message.isRead && !messageIsInCurrentThread) {
                sum = sum + 1;
              }
              return sum;
          }, 0
        )
      })
  }

}
