import { TestBed } from '@angular/core/testing';

import { SaisonsService } from './saisons.service';

describe('SaisonsService', () => {
  let service: SaisonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaisonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
