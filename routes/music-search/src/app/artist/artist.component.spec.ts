import { inject } from "@angular/core/src/render3";
import { fakeAsync } from "@angular/core/testing";
import { Router } from "@angular/router";

import { SpotifyService } from "../spotify.service";
import { MockSpotifyService } from "../test/spotify.service.mock";
import { advance, configureMusicTests, createRoot, RootCmp } from "../test/test.module";

describe('ArtistComponent', () => {
  beforeEach(async() => {
    configureMusicTests();
  });

  describe('initialization', () => {
    it('retrieves the artists', fakeAsync(
      inject([Router, SpotifyService],
        (router: Router, mockSpotify: MockSpotifyService) => {
          const fixture = createRoot(router, RootCmp);
          router.navigateByUrl('/artists/2');
          advance(fixture);
          expect(MockSpotifyService.getArtistSpy).toHaveBeenCalledWith('2');
        })
    ) )
  })
})