import { TestBed } from '@angular/core/testing';

import { AdService } from './people/ad.service';

describe('AdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdService = TestBed.get(AdService);
    expect(service).toBeTruthy();
  });
});
