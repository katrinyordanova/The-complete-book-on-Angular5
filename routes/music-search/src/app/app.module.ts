import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';
import { LoadingComponent } from './loading/loading.component';
import { routes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from './spotify.service';
import { ArtistComponent } from './artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumsComponent,
    TracksComponent,
    LoadingComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
