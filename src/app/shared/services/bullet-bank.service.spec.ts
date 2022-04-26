import { TestBed } from '@angular/core/testing';

import { BulletBankService } from './bullet-bank.service';

describe('BulletBankService', () => {
  let service: BulletBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
