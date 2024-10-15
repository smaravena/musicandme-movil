import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor() {}

  //GUARDAR TOKEN
  login(token: string) {
    localStorage.setItem('authToken', token);
  }

  //ELIMINAR TOKEN
  logout() {
    localStorage.removeItem('authToken');
  }

  //VERIFICA TOKEN
  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  //OBTENER TOKEN
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
