import { TestBed } from '@angular/core/testing';

import { IplserviceService } from './iplservice.service';

describe('IplserviceService', () => {
  let service: IplserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IplserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
