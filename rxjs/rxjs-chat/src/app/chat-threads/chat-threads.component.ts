import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreadService } from '../thread/thread.service';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.scss']
})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<any>;

  constructor(public threadService: ThreadService) {
    this.threads = threadService.orderedThreads;
   }

  ngOnInit() {
  }

}
