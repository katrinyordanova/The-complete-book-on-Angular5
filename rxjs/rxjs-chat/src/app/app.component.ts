import { Component } from '@angular/core';

import { MessageService } from './message/message.service';
import { ThreadService } from './thread/thread.service';
import { UserService } from './user/user.service';
import { ChatExampleData } from './data/chat-example-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    public messageService: MessageService,
    public threadsService: ThreadService,
    public userService: UserService
  ) 
  {
    ChatExampleData.init(messageService, threadsService, userService)  
  }
}
