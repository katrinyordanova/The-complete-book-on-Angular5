import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeEncapsulationComponent } from './native-encapsulation.component';

describe('NativeEncapsulationComponent', () => {
  let component: NativeEncapsulationComponent;
  let fixture: ComponentFixture<NativeEncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeEncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
