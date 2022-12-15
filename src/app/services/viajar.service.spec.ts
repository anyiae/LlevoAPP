import { TestBed } from '@angular/core/testing';

import { ViajarService } from './viajar.service';

describe('ViajarService', () => {
  let service: ViajarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
