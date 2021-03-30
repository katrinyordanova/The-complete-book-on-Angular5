import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  {
    this.route.queryParams.subscribe(params => { this.query = params['query'] || ''; });
  }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    console.log('this.query: ', this.query);
    if(!this.query) {
      return;
    }

    this.spotifyService.searchTrack(this.query).subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    this.results = null;
    if(res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

  submit(query: string): void {
    this.router.navigate(['search'], { queryParams: { query: query } })
      .then(_ => this.search());
  }
}
