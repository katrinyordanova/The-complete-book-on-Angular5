import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductsListComponent } from './products-list.component';

describe('PorductsListComponent', () => {
  let component: PorductsListComponent;
  let fixture: ComponentFixture<PorductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
