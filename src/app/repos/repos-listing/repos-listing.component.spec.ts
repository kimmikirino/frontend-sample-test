import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposListingComponent } from './repos-listing.component';

describe('ReposListingComponent', () => {
  let component: ReposListingComponent;
  let fixture: ComponentFixture<ReposListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
