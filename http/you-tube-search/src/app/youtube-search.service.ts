import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { SearchResult } from './search-result.model';

export const YOUTUBE_API_KEY: string = "AIzaSyBoYms67NPno7NACS1QwAalsbFCYOTSfi8";
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YoutubeSearchService {

  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) { }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`, 
      `part=snippet`, 
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;

    return this.http.get(queryUrl).map(response => {
      return <any>response['items'].map(item => {
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title, 
          description: item.snippet.description, 
          thumbnailUrl: item.snippet.thumbnails.high.url
        })
      });
    });
  }
}
