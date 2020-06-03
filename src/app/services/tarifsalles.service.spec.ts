import { TestBed } from '@angular/core/testing';

import { TarifsallesService } from './tarifsalles.service';

describe('TarifsallesService', () => {
  let service: TarifsallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarifsallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
