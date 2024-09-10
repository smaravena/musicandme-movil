import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage  {
  email:string="";
  
  constructor(public toastController: ToastController) { }
  emailValido(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Patrón de email básico
    return emailRegex.test(email);
  }
  restContra(){
    if (!this.emailValido(this.email)){
      this.presentToast("bottom","¡Ingrese correo electronico valido!",2500)
    }else{
      this.presentToast("bottom","Las instrucciones para restablecer contraseña han sido enviadas a su correo")
    };
  }
  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, duration?:number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration?duration:2500,
      position: position,
    });

    await toast.present();
  }


}
