import { TestBed } from '@angular/core/testing';

import { ChambersService } from './chambers.service';

describe('ChambersService', () => {
  let service: ChambersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChambersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
