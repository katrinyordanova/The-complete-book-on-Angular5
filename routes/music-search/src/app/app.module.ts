import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';
import { LoadingComponent } from './loading/loading.component';
import { routes } from './routes';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistsComponent,
    AlbumsComponent,
    TracksComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
