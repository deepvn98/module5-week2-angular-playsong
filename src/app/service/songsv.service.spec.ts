import { TestBed } from '@angular/core/testing';

import { SongsvService } from './songsv.service';

describe('SongsvService', () => {
  let service: SongsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
