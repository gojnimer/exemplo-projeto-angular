import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModelReviewComponent } from './list-model-review.component';

describe('ListModelReviewComponent', () => {
  let component: ListModelReviewComponent;
  let fixture: ComponentFixture<ListModelReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListModelReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModelReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
