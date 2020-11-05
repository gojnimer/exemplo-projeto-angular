import { TestBed } from '@angular/core/testing';

import { ListRestrictiveApiService } from './list-restrictive-api.service';

describe('ListRestrictiveApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListRestrictiveApiService = TestBed.get(ListRestrictiveApiService);
    expect(service).toBeTruthy();
  });
});
