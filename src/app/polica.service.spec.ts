import { TestBed } from '@angular/core/testing';

import { PolicaService } from './polica.service';

describe('PolicaService', () => {
  let service: PolicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
