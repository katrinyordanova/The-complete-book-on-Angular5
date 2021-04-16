import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushChangeDetectionComponent } from './on-push-change-detection.component';

describe('OnPushChangeDetectionComponent', () => {
  let component: OnPushChangeDetectionComponent;
  let fixture: ComponentFixture<OnPushChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
