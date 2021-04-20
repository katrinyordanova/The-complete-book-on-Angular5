import { Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { TracksComponent } from './tracks/tracks.component';

export const routes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'artists/:id', component: ArtistComponent },
    { path: 'albums/:id', component: AlbumsComponent },
    { path: 'tracks/:id', component: TracksComponent }
]