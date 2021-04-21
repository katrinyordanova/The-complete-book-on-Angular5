import { fakeAsync, inject, tick } from "@angular/core/testing";
import { YoutubeSearchService } from "../youtube-search.service";
import { MockBackend } from '@angular/http/testing';

const defaultResponse = {
  'items': [
    {
      'id': { 'videoId': 'VIDEO_ID' },
      'snippet': {
        'title': 'TITLE',
        'description': 'DESCRIPTION',
        'thumbnails': {
          'high': { 'url': 'THUMBNAIL_URL' }
        }
      }
    }
  ]
};

describe('search', () => {
  function search(term: string, response: any, callback) {
    return inject([YoutubeSearchService, MockBackend],
      fakeAsync((service, backend) => {
        let req;
        let res;

        backend.connections.subscribe(c => {
          req = c.request;
          c.mockRespond(new Response(<any>{body: response}));
        });

        service.search(term).subscribe(_res => {
          res = _res;
        });
        tick();

        callback(req, res);
      })
    );
  }

  it('parses YouTube video id',
    search('hey', defaultResponse, (req, res) => {
      const video = res[0];
      expect(video.id).toEqual('VIDEO_ID');
  }));

  it('parses YouTube video title',
    search('hey', defaultResponse, (req, res) => {
      const video = res[0];
      expect(video.title).toEqual('TITLE');
  }));

  it('parses YouTube video description',
    search('hey', defaultResponse, (req, res) => {
      const video = res[0];
      expect(video.description).toEqual('DESCRIPTION');
  }));

  it('parses YouTube video thumbnail',
    search('hey', defaultResponse, (req, res) => {
      const video = res[0];
      expect(video.description).toEqual('DESCRIPTION');
  }));

  it('sends the query',
    search('term', defaultResponse, (req, res) => {
      expect(req.url).toContain('q=term');
  }));

  it('sends the API key',
    search('term', defaultResponse, (req, res) => {
      expect(req.url).toContain('key=YOUTUBE_API_KEY');
  }));

  it('uses the provided YouTube URL',
    search('term', defaultResponse, (req, res) => {
      expect(req.url).toMatch(/^YOUTUBE_API_URL\?/);
  }));
})
