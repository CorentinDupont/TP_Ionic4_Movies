import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'deux-mille48', loadChildren: './deux-mille48/deux-mille48.module#DeuxMille48PageModule' },
  { path: 'favorite-movies', loadChildren: './favorite-movies/favorite-movies.module#FavoriteMoviesPageModule' },
  { path: 'movie-list', loadChildren: './movie-list/movie-list.module#MovieListPageModule' },
  { path: 'show-movie', loadChildren: './show-movie/show-movie.module#ShowMoviePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
