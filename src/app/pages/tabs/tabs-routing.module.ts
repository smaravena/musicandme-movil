import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then((m) => m.PerfilPageModule),
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'qr-usuario',
        loadChildren: () => import('../qr-usuario/qr-usuario.module').then((m) => m.QrUsuarioPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
