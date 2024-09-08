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
    if(this.validateModel(this.login)){
     this.presentToast("top","¡Que alegria volver a verte!")
     //Creacion para el traspaso de parametros a otras pages
     let navigationExtras : NavigationExtras={
      state:{login: this.login}
     };
     this.router.navigate(['/perfil'],navigationExtras);
    }else{
      this.presentToast("top","No se pudo validar: Falta "+this.field,5000);
    }
  }
  //Creacion de validateModel, para validar el ingreso del login
  validateModel(model:any){
    for(var[key,value] of Object.entries(model)){
      //si el valor es nulo retorna falso para indicar el campo a rellenar
      if(value==""){
        this.field=key;
        return false;
      }
    }
    return true;
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
