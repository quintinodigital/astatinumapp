import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaDetalharPage } from './pessoa-detalhar.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaDetalharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaDetalharPageRoutingModule {}
