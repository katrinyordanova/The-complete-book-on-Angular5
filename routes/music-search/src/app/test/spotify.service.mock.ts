import { SpotifyService } from "../spotify.service";
import { SpyObject } from "./test.helpers";

export class MockSpotifyService extends SpyObject {
    getAlbumSpy;
    getArtistSpy;
    getTrackSpy;
    searchTrackSpy;
    mockObservables;
    fakeResponse;

    constructor() {
        super(SpotifyService);

        this.fakeResponse = null;
        this.getAlbumSpy = this.spy('getAlbum').and.returnValue(this);
        this.getArtistSpy = this.spy('getArtist').and.returnValue(this);
        this.getTrackSpy = this.spy('getTrack').and.returnValue(this);
        this.searchTrackSpy = this.spy('searchTrack').and.returnValue(this);
    }

    subscribe(callback): void {
        callback(this.fakeResponse);
    }

    getProviders(): Array<any> {
        return [{ provide: SpotifyService, useValue: this }];
    }

    setResponse(json: any): void {
        this.fakeResponse = json;
    }
}