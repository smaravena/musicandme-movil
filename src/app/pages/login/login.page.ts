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

  constructor(public router:Router, public toastController:ToastController) { }

  ngOnInit() {
  }

  ingresar(){
    this.router.navigate(['/home']);
  }
}
