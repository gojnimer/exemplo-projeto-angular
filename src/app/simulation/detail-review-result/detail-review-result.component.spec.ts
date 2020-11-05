import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReviewResultComponent } from './detail-review-result.component';

describe('DetailReviewResultComponent', () => {
  let component: DetailReviewResultComponent;
  let fixture: ComponentFixture<DetailReviewResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReviewResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReviewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
