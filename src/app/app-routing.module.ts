import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'wall',
    loadChildren: () => import('./wall/wall.module').then( m => m.WallPageModule)
  },
  {
    path: 'nuevahueca',
    children: [
      {
        path: "",
        loadChildren: () => import('./nuevahueca/nuevahueca.module').then( m => m.NuevahuecaPageModule),
      },
      {
        path: ":lugarId",
        loadChildren: () => import('./nuevahueca/lugar/lugar.module').then(m => m.LugarPageModule),
      }
    ]
  },
  {
    path: 'nuevolugar',
    loadChildren: () => import('./nuevahueca/add-lugar/add-lugar.module').then(m => m.AddLugarPageModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
