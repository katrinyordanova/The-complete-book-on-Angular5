import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTabsetComponent } from './content-tabset.component';

describe('ContentTabsetComponent', () => {
  let component: ContentTabsetComponent;
  let fixture: ComponentFixture<ContentTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
