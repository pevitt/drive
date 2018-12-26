import { TestBed, inject } from '@angular/core/testing';

import { GsuiteService } from './gsuite.service';

describe('GsuiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GsuiteService]
    });
  });

  it('should be created', inject([GsuiteService], (service: GsuiteService) => {
    expect(service).toBeTruthy();
  }));
});
