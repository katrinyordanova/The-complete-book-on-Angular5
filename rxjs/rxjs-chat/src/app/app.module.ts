import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { MessageService } from './message/message.service';
import { ThreadService } from './thread/thread.service';
import { UserService } from './user/user.service';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FormsModule } from '@angular/forms';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatPageComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    ChatNavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessageService, ThreadService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
