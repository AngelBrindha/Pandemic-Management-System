import { TestBed } from '@angular/core/testing';

import { ApiAngularService } from './api-angular.service';

describe('ApiAngularService', () => {
  let service: ApiAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
