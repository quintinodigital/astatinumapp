import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bemvindo',
    pathMatch: 'full'
  },
  {
    path: "",
    loadChildren: () => import('./component/tabmenu/tabmenu.module').then( m => m.TabmenuPageModule)
  },
  {
    path: 'bemvindo',
    loadChildren: () => import('./page/bemvindo/bemvindo.module').then( m => m.BemvindoPageModule)
  },
  {
    path: 'acessar',
    loadChildren: () => import('./page/acessar/acessar.module').then( m => m.AcessarPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./page/registrar/registrar.module').then( m => m.RegistrarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
