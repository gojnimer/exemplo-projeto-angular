import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionReviewParammetersComponent } from './inclusion-review-parammeters.component';

describe('InclusionReviewParammetersComponent', () => {
  let component: InclusionReviewParammetersComponent;
  let fixture: ComponentFixture<InclusionReviewParammetersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusionReviewParammetersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusionReviewParammetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
