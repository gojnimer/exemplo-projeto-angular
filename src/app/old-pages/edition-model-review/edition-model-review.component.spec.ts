import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionModelReviewComponent } from './edition-model-review.component';

describe('EditionModelReviewComponent', () => {
  let component: EditionModelReviewComponent;
  let fixture: ComponentFixture<EditionModelReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionModelReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionModelReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
