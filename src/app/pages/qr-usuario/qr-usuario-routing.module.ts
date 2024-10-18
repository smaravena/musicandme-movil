import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrUsuarioPage } from './qr-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: QrUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrUsuarioPageRoutingModule {}
