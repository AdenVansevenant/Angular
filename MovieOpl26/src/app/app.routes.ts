import { Routes } from '@angular/router';
import { MovieList } from './Features/Movie/Components/movie-list/movie-list';
import { MovieDetail } from './Features/Movie/Components/movie-detail/movie-detail';
import { Login } from './Features/Login/login/login';
import { UnderConstruction } from './Features/About/under-construction/under-construction';

export const routes: Routes = [
        { path: 'movie-list', component: MovieList },
{ path: 'movie-detail/:Id', component: MovieDetail},
{ path: 'login', component: Login },
{ path: 'admin', component: UnderConstruction },
{ path: '', redirectTo: '/movie-list', pathMatch: 'full' },
/*The second  matching strategy is full. When it’s specified for a route, 
the router will check if the the path is exactly equal to the path of 
the current browser’s URL:*/
{ path: '**', component: UnderConstruction }

];
