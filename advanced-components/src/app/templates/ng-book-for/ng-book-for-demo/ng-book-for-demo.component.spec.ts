import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBookForDemoComponent } from './ng-book-for-demo.component';

describe('NgBookForDemoComponent', () => {
  let component: NgBookForDemoComponent;
  let fixture: ComponentFixture<NgBookForDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBookForDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBookForDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
