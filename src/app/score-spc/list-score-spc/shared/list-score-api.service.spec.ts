import { TestBed } from '@angular/core/testing';

import { ListScoreApiService } from './list-score-api.service';

describe('ListScoreApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListScoreApiService = TestBed.get(ListScoreApiService);
    expect(service).toBeTruthy();
  });
});
