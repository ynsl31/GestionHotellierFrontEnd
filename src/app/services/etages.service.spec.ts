import { TestBed } from '@angular/core/testing';

import { EtagesService } from './etages.service';

describe('EtagesService', () => {
  let service: EtagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
