import { TestBed } from '@angular/core/testing';

import { AddglucoseService } from './addglucose.service';

describe('AddglucoseService', () => {
  let service: AddglucoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddglucoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
