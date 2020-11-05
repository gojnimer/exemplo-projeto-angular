import { TestBed } from '@angular/core/testing';

import { CpfValidatorService } from './cpf-validator.service';

describe('CpfValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpfValidatorService = TestBed.get(CpfValidatorService);
    expect(service).toBeTruthy();
  });
});
