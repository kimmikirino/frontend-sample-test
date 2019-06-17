import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsListingComponent } from './commits-listing.component';

describe('CommitsListingComponent', () => {
  let component: CommitsListingComponent;
  let fixture: ComponentFixture<CommitsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
