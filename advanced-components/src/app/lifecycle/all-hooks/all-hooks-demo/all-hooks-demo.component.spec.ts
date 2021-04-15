import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHooksDemoComponent } from './all-hooks-demo.component';

describe('AllHooksDemoComponent', () => {
  let component: AllHooksDemoComponent;
  let fixture: ComponentFixture<AllHooksDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHooksDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHooksDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
