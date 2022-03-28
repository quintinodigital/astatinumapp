import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabmenuPage } from './tabmenu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabmenu/monitoramento',
    pathMatch: 'full'
  },
  {
    path: "tabmenu",
    component: TabmenuPage,
    children: [
      {
        path: "monitoramento",
        children: [
          {
            path: "",
            loadChildren: () => import('../../page/monitoramento/monitoramento.module').then( module => module.MonitoramentoPageModule)
          }
        ]
      },
      {
        path: "configuracao",
        children: [
          {
            path: "",
            loadChildren: () => import('../../page/configuracao/configuracao.module').then( module => module.ConfiguracaoPageModule)
          }
        ]
      },
      {
        path: "pessoa",
        children: [
          {
            path: "",
            loadChildren: () => import('../../page/pessoa/pessoa.module').then( module => module.PessoaPageModule)
          }
        ]
      },
      {
        path: "notificacao",
        children: [
          {
            path: "",
            loadChildren: () => import('../../page/notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
          }
        ]
      },
      {
        path: "cartao",
        children: [
          {
            path: "",
            loadChildren: () => import('../../page/cartao/cartao.module').then( m => m.CartaoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabmenu/monitoramento',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmenuPageRoutingModule { }
