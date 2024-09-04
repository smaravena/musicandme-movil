import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage{
  login:any;
  constructor(public activedRoute: ActivatedRoute,
  private router:Router){
  this.activedRoute.queryParams.subscribe(params=>{
    if(this.router.getCurrentNavigation()?.extras?.state){
      this.login = this.router.getCurrentNavigation()?.extras?.state?.['login'];
    }
  });  
  }
}



