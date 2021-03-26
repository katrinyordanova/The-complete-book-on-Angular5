import { TestBed, inject } from '@angular/core/testing';

import { YoutubeSearchService } from './youtube-search.service';

describe('YoutubeSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeSearchService]
    });
  });

  it('should be created', inject([YoutubeSearchService], (service: YoutubeSearchService) => {
    expect(service).toBeTruthy();
  }));
});
