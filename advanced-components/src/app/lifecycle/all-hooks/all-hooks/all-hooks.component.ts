import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  OnChanges, 
  OnDestroy, 
  OnInit 
} from '@angular/core';

@Component({
  selector: 'app-all-hooks',
  templateUrl: './all-hooks.component.html',
  styleUrls: ['./all-hooks.component.scss']
})
export class AllHooksComponent implements 
  OnInit, OnDestroy, DoCheck, OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked{
  counter: number = 0;

  constructor() {
    console.log('AllHooksComponent ---------- [constructor]');
    this.counter = 1;
  }

  inc(): void {
    console.log('AllHooksComponent ---------- [counter]');
    this.counter += 1;
  }

  ngOnInit(): void {
    console.log('AllHooksComponent - OnInit');
  }

  ngOnDestroy(): void {
    console.log('AllHooksComponent - OnDestroy');
  } 

  ngDoCheck(): void {
    console.log('AllHooksComponent - DoCheck');
  }

  ngOnChanges(): void {
    console.log('AllHooksComponent - OnChanges');
  }

  ngAfterContentInit(): void {
    console.log('AllHooksComponent - AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('AllHooksComponent - AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('AllHooksComponent - AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('AllHooksComponent - AfterViewChecked');
  }
}
