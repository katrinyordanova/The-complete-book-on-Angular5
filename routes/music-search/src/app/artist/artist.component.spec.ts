import { inject } from "@angular/core/src/render3";
import { fakeAsync } from "@angular/core/testing";
import { Router } from "@angular/router";
import { Location } from '@angular/common';

import { SpotifyService } from "../spotify.service";
import { MockSpotifyService } from "../test/spotify.service.mock";
import { advance, configureMusicTests, createRoot, RootCmp } from "../test/test.module";
import { ExpectedConditions } from "protractor";

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
  });

  describe('back', () => {
    it('returns to the previous location', fakeAsync(
      inject([Router, Location],
          (router: Router, location: Location) => {
            const fixture = createRoot(router, RootCmp);
            expect(location.path()).toEqual('/');
            router.navigateByUrl('/artists/2');
            advance(fixture);
            expect(location.path()).toEqual('/artists/2');
            const artist = fixture.debugElement.children[1].componentInstance;
            artist.back();
            advance(fixture);
            expect(location.path()).toEqual('/');
          })
    ));
  });

  describe('renderArtist', () => {
    it('renders album info', fakeAsync(
      inject([Router, SpotifyService],
        (router: Router, spotifyService: MockSpotifyService) => {
          const fixture = createRoot(router, RootCmp);
          const artist = { name: 'ARTIST_NAME', images: [{url: 'IMAGE_1'}]};
          MockSpotifyService.setResponse(artist);
          router.navigateByUrl('/artists/2');
          advance(fixture);
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('h1').innerHTML).toContain('ARTIST_NAME');
          expect(compiled.querySelector('img').src).toContain('IMAGE_1');
        })
    ))
  });
})