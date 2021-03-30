import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  id: string;
  track: Object;

  constructor(
    private spotifyService: SpotifyService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.spotifyService
      .getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  renderTrack(res: any): void {
    this.track = res;
  }
  back(res: any) {
    this.location.back();
  }
}
