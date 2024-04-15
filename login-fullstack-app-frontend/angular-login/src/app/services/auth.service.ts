import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isAuthenticated(): boolean {
    // Verifica si el token está presente en el sessionStorage
    return sessionStorage.getItem('token') !== null;
  }
}
