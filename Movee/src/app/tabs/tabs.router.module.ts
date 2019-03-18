import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'favorite-movies',
        children: [
          {
            path: '',
            loadChildren: '../favorite-movies/favorite-movies.module#FavoriteMoviesPageModule'
          }
        ]
      },  
      {
        path: 'movie-list',
        children: [
          {
            path: '',
            loadChildren: '../movie-list/movie-list.module#MovieListPageModule'
          }
        ]
      },
      {
        path: 'deux-mille48',
        children: [
          {
            path: '',
            loadChildren: '../deux-mille48/deux-mille48.module#DeuxMille48PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/movie-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/movie-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
