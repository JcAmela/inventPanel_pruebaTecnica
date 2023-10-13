import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Aquí simplemente verificamos que los campos no estén vacíos como un ejemplo básico.
    // En una aplicación real, aquí iría la lógica para comprobar con el backend.
    if (username && password) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
