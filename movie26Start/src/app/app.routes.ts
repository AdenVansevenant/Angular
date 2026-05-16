import { Routes } from '@angular/router';
import { AboutComponent } from './Features/about/about';
import { MovieDetailComponent } from './Features/movie/components/movie-detail/movie-detail';
import { MovieListComponent } from './Features/movie/components/movie-list/movie-list';

export const routes: Routes = [
  { path: '', component: MovieListComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: '**', redirectTo: '' },
];
