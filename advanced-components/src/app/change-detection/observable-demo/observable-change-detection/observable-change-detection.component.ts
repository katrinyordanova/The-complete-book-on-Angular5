import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-change-detection',
  templateUrl: './observable-change-detection.component.html',
  styleUrls: ['./observable-change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableChangeDetectionComponent implements OnInit {
  counter: number = 0;
  @Input() items: Observable<number>;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.items.subscribe((item) => {
      this.counter++;
      if(this.counter % 5 === 0) {
        this.changeDetector.markForCheck();
      }
    },
    null,
    () => {
      this.changeDetector.markForCheck();
    })
  }
}
