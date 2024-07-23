import { Routes } from '@angular/router';
import { HomeComponent as HomePage } from '../pages/home/home.component';
import { SearchMoviesPageComponent as SearchPage } from '../pages/search-movies-page/search-movies-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'search-movies',
    component: SearchPage,
  }
];
