import { Routes } from '@angular/router';
import { Counter } from './features/Counter/components/counter/counter';
import { FetchData } from './features/Weather/components/fetch-data/fetch-data';
import { AboutUs } from './features/player/components/about-us/about-us';
import { Create } from './features/player/components/create/create';
import { Details } from './features/player/components/details/details';
import { Edit } from './features/player/components/edit/edit';
import { List } from './features/player/components/list/list';

export const routes: Routes = [
  { path: '', redirectTo: 'fetch-data', pathMatch: 'full' },
  { path: 'about-us', component: AboutUs },
  { path: 'counter', component: Counter },
  { path: 'fetch-data', component: FetchData },
  { path: 'players', component: List },
  { path: 'players/list', component: List },
  { path: 'players/create', component: Create },
  { path: 'players/details/:id', component: Details },
  { path: 'players/edit/:id', component: Edit },
  { path: '**', redirectTo: 'fetch-data' },
];
