import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBookIfDemoComponent } from './ng-book-if-demo.component';

describe('NgBookIfDemoComponent', () => {
  let component: NgBookIfDemoComponent;
  let fixture: ComponentFixture<NgBookIfDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBookIfDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBookIfDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
