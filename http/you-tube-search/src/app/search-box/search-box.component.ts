import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

import { YoutubeSearchService } from '../youtube-search.service';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { SearchResult } from '../search-result.model';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  
  constructor(
    private youtube: YoutubeSearchService,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => e.target.value)
    .filter((text: string) => text.length > 1)
    .debounceTime(250)
    .do(() => this.loading.emit(true))
    .map((query: string) => this.youtube.search(query))
    .switch()
    .subscribe(
      (result: SearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(result);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    )
  }

}
