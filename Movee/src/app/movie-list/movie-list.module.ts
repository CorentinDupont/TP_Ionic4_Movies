import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovieListPage } from './movie-list.page';
import { LoadingComponent } from '../loading/loading.component';

import { GetFirstGenrePipe } from '../get-first-genre.pipe';

const routes: Routes = [
  {
    path: '',
    component: MovieListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    MovieListPage,
    GetFirstGenrePipe,
    LoadingComponent,
  ]
})
export class MovieListPageModule {}
