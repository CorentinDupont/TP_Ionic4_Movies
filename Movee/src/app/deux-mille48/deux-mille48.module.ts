import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeuxMille48Page } from './deux-mille48.page';

const routes: Routes = [
  {
    path: '',
    component: DeuxMille48Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeuxMille48Page]
})
export class DeuxMille48PageModule {}
