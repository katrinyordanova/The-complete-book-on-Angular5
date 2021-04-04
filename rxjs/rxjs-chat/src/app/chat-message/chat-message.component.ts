import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message;
  currentUser: User;
  incoming: boolean;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe((currentUser: User) => {
      this.currentUser = currentUser;
      if(this.message.author && currentUser) {
        this.incoming = this.message.author.id !== currentUser.id;
      }
    })
  }

}
