import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, BaseResponseOptions, ConnectionBackend, Http, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { SpotifyService } from './spotify.service';

describe('SpotifyService', () => {
  describe('SpotifyService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          BaseResponseOptions,
          MockBackend,
          SpotifyService,
          {
            provide: Http,
            useFactory: 
              (backend: ConnectionBackend,
                defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
              }, deps: [ MockBackend, BaseRequestOptions ]
          }
        ]
      })
    });

    function expectUrl(backend: MockBackend, url: string) {
      backend.connections.subscribe(c => {
        expect(c.request.url).toBe(url);
        const response = new ResponseOptions({body: '{ "name": "felipe" }'});
        c.mockRespond(new Response(response));
      });
    }

    describe('getTrack', () => {
      it('retrieves using the track ID',
        inject([ SpotifyService, MockBackend ], fakeAsync((SpotifyService, MockBackend) => {
          var res;
          MockBackend.connections.subscribe(c => {
            expect(c.request.url).toBe('https://api.spotify.com/v1/tracks/TRACK_ID');
            let response = new ResponseOptions({body: '{ "name": "felipe"}'});
            c.mockRespond(new Response(response));
          });
          SpotifyService.getTrack('TRACK_ID').subscribe((_res) => {
            res = _res;
          });
          tick();
          expect(res.name).toBe('felipe');
        })))
    });

    describe('getArtist', () => {
      it('retrieves using the artist ID',
        inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
          let res;
          expectUrl(backend, 'https://api.spotify.com/v1/artists/ARTIST_ID');
          svc.getArtist('ARTIST_ID').subscribe((_res) => {
            res = _res;
          });
          tick();
          expect(res.name).toBe('felipe');
        })))
    });

    describe('getAlbum', () => {
      it('retrieves using the album ID',
        inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
          let res;
          expectUrl(backend, 'https://api.spotify.com/v1/albums/ALBUM_ID');
          svc.getAlbum('ALBUM_ID').subscribe((_res) => {
            res = _res;
          });
          tick();
          expect(res.name).toBe('felipe');
        })))
    });

    describe('searchTrack', () => {
      it('searches type and term',
        inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
          let res;
          expectUrl(backend, 'https://api.spotify.com/v1/search?q=TERM&type=track');
          svc.searchTrack('TERM').subscribe((_res) => {
            res = _res;
          });
          tick();
          expect(res.name).toBe('felipe');
        })))
    })
  });
});
