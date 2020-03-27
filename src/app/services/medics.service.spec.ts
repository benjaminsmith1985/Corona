import { TestBed } from '@angular/core/testing';

import { MedicsService } from './medics.service';

describe('MedicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicsService = TestBed.get(MedicsService);
    expect(service).toBeTruthy();
  });
});
