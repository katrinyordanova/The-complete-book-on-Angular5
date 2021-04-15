import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHooksComponent } from './all-hooks.component';

describe('AllHooksComponent', () => {
  let component: AllHooksComponent;
  let fixture: ComponentFixture<AllHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
