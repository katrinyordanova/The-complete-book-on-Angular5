import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalStyleComponent } from './external-style.component';

describe('ExternalStyleComponent', () => {
  let component: ExternalStyleComponent;
  let fixture: ComponentFixture<ExternalStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
