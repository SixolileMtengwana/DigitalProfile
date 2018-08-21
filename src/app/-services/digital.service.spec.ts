import { TestBed, inject } from '@angular/core/testing';

import { DigitalService } from './digital.service';

describe('DigitalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DigitalService]
    });
  });

  it('should be created', inject([DigitalService], (service: DigitalService) => {
    expect(service).toBeTruthy();
  }));
});
