import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrUsuarioPageRoutingModule } from './qr-usuario-routing.module';

import { QrUsuarioPage } from './qr-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrUsuarioPageRoutingModule
  ],
  declarations: [QrUsuarioPage]
})
export class QrUsuarioPageModule {}
