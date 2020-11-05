import { TestBed } from '@angular/core/testing';

import { ListModelReviewApiService } from './list-model-review-api.service';

describe('ListModelReviewApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListModelReviewApiService = TestBed.get(ListModelReviewApiService);
    expect(service).toBeTruthy();
  });
});
