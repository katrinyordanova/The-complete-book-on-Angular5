import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTabsDemoComponent } from './content-tabs-demo.component';

describe('ContentTabsDemoComponent', () => {
  let component: ContentTabsDemoComponent;
  let fixture: ComponentFixture<ContentTabsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTabsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTabsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
