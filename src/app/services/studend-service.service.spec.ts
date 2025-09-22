import { TestBed } from '@angular/core/testing';

import { StudendServiceService } from './studend-service.service';

describe('StudendServiceService', () => {
  let service: StudendServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudendServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
