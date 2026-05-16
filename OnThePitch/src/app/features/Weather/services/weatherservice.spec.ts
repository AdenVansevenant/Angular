import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { Weatherservice } from './weatherservice';

describe('Weatherservice', () => {
  let service: Weatherservice;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(Weatherservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
