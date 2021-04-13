import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionDemoComponent } from './content-projection-demo.component';

describe('ContentProjectionDemoComponent', () => {
  let component: ContentProjectionDemoComponent;
  let fixture: ComponentFixture<ContentProjectionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProjectionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
