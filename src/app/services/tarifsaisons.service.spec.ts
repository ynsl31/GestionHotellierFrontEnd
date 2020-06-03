import { TestBed } from '@angular/core/testing';

import { TarifsaisonsService } from './tarifsaisons.service';

describe('TarifsaisonsService', () => {
  let service: TarifsaisonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarifsaisonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
