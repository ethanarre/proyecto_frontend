import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    console.log(this.email, this.password);
    this.authService.login(this.email, this.password).subscribe(
      success => {
        if (!success) {
          this.errorMessage = 'Invalid email or password';
        }
      },
      error => {
        console.error('Error logging in:', error);
        this.errorMessage = 'Error logging in. Please try again later.';
      }
    );
  }
}
