import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';
import { Thread } from '../thread/thread.model';
import { ThreadService } from '../thread/thread.service';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(
    public userService: UserService,
    public threadService: ThreadService,
    public messageService: MessageService,
    public el: ElementRef
  ) { }

  ngOnInit(): void {
    this.messages = this.threadService.currentThreadMessages;
    this.draftMessage = new Message();
    this.threadService.currentThread.subscribe((thread: Thread) => {
      this.currentThread = thread;
    });
    this.userService.currentUser.subscribe((user: User) => {
      this.currentUser = user;
    });
    this.messages.subscribe((messages: Message[]) => {
      setTimeout(() => {
        this.scrollToBottom();
      });
    });
  }

  sendMessage(): void {
    const message: Message = this.draftMessage;
    message.author = this.currentUser;
    message.thread = this.currentThread; 
    message.isRead = true;
    this.messageService.addMessage(message);
    this.draftMessage = new Message();
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el.nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}
