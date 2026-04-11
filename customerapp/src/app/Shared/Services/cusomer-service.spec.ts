import { TestBed } from '@angular/core/testing';

import { CusomerService } from './cusomer-service';

describe('CusomerService', () => {
  let service: CusomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
