import { TestBed } from '@angular/core/testing';

import { ListAssociatedProcessApiService } from './list-associated-process-api.service';

describe('ListAssociatedProcessApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListAssociatedProcessApiService = TestBed.get(ListAssociatedProcessApiService);
    expect(service).toBeTruthy();
  });
});
