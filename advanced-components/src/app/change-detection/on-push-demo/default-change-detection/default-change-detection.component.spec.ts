import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultChangeDetectionComponent } from './default-change-detection.component';

describe('DefaultChangeDetectionComponent', () => {
  let component: DefaultChangeDetectionComponent;
  let fixture: ComponentFixture<DefaultChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
