import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevahuecaPage } from './nuevahueca.page';

const routes: Routes = [
  {
    path: '',
    component: NuevahuecaPage
  },

  {
    path: 'lugar',
    loadChildren: () => import('./lugar/lugar.module').then( m => m.LugarPageModule)
  },
  {
    path: 'add-lugar',
    loadChildren: () => import('./add-lugar/add-lugar.module').then( m => m.AddLugarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevahuecaPageRoutingModule {}
