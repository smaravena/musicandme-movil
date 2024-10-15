import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AnimationController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'; // SERVICE AUTH

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

  @ViewChild('usernameinput', { read: ElementRef }) usernameinput!: ElementRef;
  @ViewChild('passwordinput', { read: ElementRef }) passwordinput!: ElementRef;

  constructor(
    public router: Router,
    public toastController: ToastController,
    private animationCtrl: AnimationController,
    private authService: AuthService //AUTH SERVICE NECESARIO GUARD
  ) {}

  ngOnInit() {}

  ingresar() {
    if (this.validateModel(this.login)) {
      const token = '1234567890abcdef'; //TOKEN CUALQUIERA, CAMBIAR A FUTURO
      this.authService.login(token); //GUARDAR TOKEN EN LOCALSTORAGE

      this.presentToast('top', '¡Qué alegría volver a verte!');
      let navigationExtras: NavigationExtras = {
        state: { login: this.login },
      };
      this.router.navigate(['/tabs/perfil'], navigationExtras);
    } else {
      this.presentToast('top', 'No se pudo validar: Falta ' + this.field, 5000);
      //MEJORAR LOGICA VALIDAR ANIMACION
      if (this.login.usuario === '' && this.login.password === '') {
        this.shakeItem(this.usernameinput); //anim user
        this.shakeItem(this.passwordinput); // anim pass
      } else if (this.login.usuario === '') {
        this.shakeItem(this.usernameinput); // anim user
      }
        else if (this.login.password === '') {
        this.shakeItem(this.passwordinput); // anim pass
      } 
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

  shakeItem(field: ElementRef) {
    const animation = this.animationCtrl
      .create()
      .addElement(field.nativeElement)
      .duration(500)
      .keyframes([
        { offset: 0.3, transform: 'translateX(-5px)' }, // izquierda
        { offset: 0.6, transform: 'translateX(15px)' }, // derecha
        { offset: 1, transform: 'translateX(0)' }, // volver
      ]);

    animation.play();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, duration?:number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration?duration:2500,
      position: position,
    });

    await toast.present();
  }
  ingresoRestablecer(){
    this.router.navigate(['/restablecer'])
  }
}
