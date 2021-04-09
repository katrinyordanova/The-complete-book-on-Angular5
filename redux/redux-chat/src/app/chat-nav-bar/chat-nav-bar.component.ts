import { Inject, Component, OnInit } from '@angular/core';
import * as Redux from 'redux';
import { AppStore } from '../app.store';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.scss']
})
export class ChatNavBarComponent implements OnInit {
  unreadMessageCount: number;

  constructor(@Inject(AppStore) private store: Redux.Store<AppStore>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState() {
    this.unreadMessageCount = getUnreadmessagesCount(this.store.getState());
  }
  ngOnInit() {
  }

}
