import { Inject, Component } from '@angular/core';
import * as Redux from 'redux';
import { AppState } from './app.reducer';
import { AppStore } from './app.store';
import { ChatExampleData } from './data/chat-example-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    ChatExampleData(store);
  }
}
