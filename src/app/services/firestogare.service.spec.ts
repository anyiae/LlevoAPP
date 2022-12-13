import { TestBed } from '@angular/core/testing';

import { FirestogareService } from './firestogare.service';

describe('FirestogareService', () => {
  let service: FirestogareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestogareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
