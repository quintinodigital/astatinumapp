import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessarPage } from './acessar.page';

const routes: Routes = [
  {
    path: '',
    component: AcessarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessarPageRoutingModule {}
