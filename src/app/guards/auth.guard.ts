import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; //SERVICE AUTH NECESARIO

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      console.log("TOKEN VALIDADO")
      return true;
    } else {
      this.router.navigate(['/login']); //SI NO VALIDA, REGRESAR LOGIN
      console.log("TOKEN NO VALIDADO")
      return false;
    }
  }
}
