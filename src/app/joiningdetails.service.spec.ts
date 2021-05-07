import { TestBed } from '@angular/core/testing';

import { JoiningdetailsService } from './joiningdetails.service';

describe('JoiningdetailsService', () => {
  let service: JoiningdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoiningdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
