import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableChangeDetectionComponent } from './observable-change-detection.component';

describe('ObservableChangeDetectionComponent', () => {
  let component: ObservableChangeDetectionComponent;
  let fixture: ComponentFixture<ObservableChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
