import { TestBed } from '@angular/core/testing';

import { AccountGetService } from './account-get.service';

describe('AccountGetService', () => {
  let service: AccountGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
