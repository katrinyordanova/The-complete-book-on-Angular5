import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservablesDemoComponent implements OnInit {
  itemObservable: Observable<number>;
  
  constructor() { }

  ngOnInit(): void {
    this.itemObservable = timer(100, 100).take(101);
  }

}
