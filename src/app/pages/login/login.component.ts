import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      // Redirige al panel principal o muestra un mensaje de bienvenida.
    } else {
      // Muestra un mensaje de error.
    }
  }
}
