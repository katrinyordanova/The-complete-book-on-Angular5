import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEncapsulationComponent } from './no-encapsulation.component';

describe('NoEncapsulationComponent', () => {
  let component: NoEncapsulationComponent;
  let fixture: ComponentFixture<NoEncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
