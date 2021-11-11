import { TestBed } from '@angular/core/testing';

import { MidwestService } from './midwest.service';

describe('MidwestService', () => {
  let service: MidwestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MidwestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
