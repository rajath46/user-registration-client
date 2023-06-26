import { TestBed } from '@angular/core/testing';

import { UserRegistrattionService } from './user-registrattion.service';

describe('UserRegistrattionService', () => {
  let service: UserRegistrattionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrattionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
