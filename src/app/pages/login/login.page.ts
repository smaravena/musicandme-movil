import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //CREDENCIALES USUARIO LOGIN PAGE
  login:any={
    usuario:"",
    password:"" 
  }
  field: string="";

  constructor(public router:Router, public toastController:ToastController) { }

  ngOnInit() {
  }

  ingresar(){
    this.router.navigate(['/home']);
    this.presentToast("bottom","Ok");
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
