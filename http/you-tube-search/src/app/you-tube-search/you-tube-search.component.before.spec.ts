import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchBoxComponent } from "../search-box/search-box.component";
import { SearchResultComponent } from "../search-result/search-result.component";
import { YouTubeSearchComponent } from "./you-tube-search.component";
import { YoutubeSearchService, YOUTUBE_API_KEY, YOUTUBE_API_URL } from "../youtube-search.service";

describe('YouTubeSearchComponent (before)', () => {
    let component: YouTubeSearchComponent;
    let fixture: ComponentFixture<YouTubeSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [
                YouTubeSearchComponent,
                SearchResultComponent,
                SearchBoxComponent
            ],
            providers: [
                YoutubeSearchService,
                { provide: YOUTUBE_API_KEY, useValue: 'YOUTUBE_API_KEY' },
                { provide: YOUTUBE_API_URL, useValue: 'YOUTUBE_API_URL' }
            ]
        });
    }));

    describe('search', () => {
        it('parses YouTube response', inject(
            [YouTubeSearchComponent, HttpTestingController],
            fakeAsync((service, httpMock) => {
                let res;
                service.search('hey').subscribe(_res => {
                    res = _res;
                });
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush({
                    items: [
                        {
                            "id": { "videoId": "VIDEO_ID" },
                            "snippet": {
                              "title": "TITLE",
                              "description": "DESCRIPTION",
                              "thumbnails": {
                                "high": { "url": "THUMBNAIL_URL" }
                              }
                            }
                        }
                    ]
                });
                tick();
                const video = res[0];
                expect(video.id).toEqual('VIDEO_ID');
                expect(video.title).toEqual('TITLE');
                expect(video.description).toEqual('DESCRIPTION');
                expect(video.thumbnailUrl).toEqual('THUMBNAIL_URL');
                httpMock.verify();
            })
        ))
    })
});