import { TestBed } from '@angular/core/testing';

import { CategoriechambreService } from './categoriechambre.service';

describe('CategoriechambreService', () => {
  let service: CategoriechambreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriechambreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
