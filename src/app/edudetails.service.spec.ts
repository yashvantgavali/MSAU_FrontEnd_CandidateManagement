import { TestBed } from '@angular/core/testing';

import { EdudetailsService } from './edudetails.service';

describe('EdudetailsService', () => {
  let service: EdudetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdudetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
