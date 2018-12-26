import { TestBed, inject } from '@angular/core/testing';

import { GmailService } from './gmail.service';

describe('GmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GmailService]
    });
  });

  it('should be created', inject([GmailService], (service: GmailService) => {
    expect(service).toBeTruthy();
  }));
});
