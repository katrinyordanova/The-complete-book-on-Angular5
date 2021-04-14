import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInitComponent } from './on-init.component';

describe('OnInitComponent', () => {
  let component: OnInitComponent;
  let fixture: ComponentFixture<OnInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
