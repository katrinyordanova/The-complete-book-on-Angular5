import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.scss']
})
export class OnInitComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('On init');
  }

  ngOnDestroy() {
    console.log('On Destroy');
  }
}
