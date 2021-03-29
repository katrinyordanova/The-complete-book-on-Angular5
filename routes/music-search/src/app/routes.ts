import { Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { SearchComponent } from './search/search.component';
import { TracksComponent } from './tracks/tracks.component';

export const routes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'artists/:id', component: ArtistsComponent },
    { path: 'albums/:id', component: AlbumsComponent },
    { path: 'tracks/:id', component: TracksComponent }
]