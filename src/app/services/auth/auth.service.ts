import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/api/login';

  constructor(private router: Router, private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };

    return this.http.post<{ token: string }>(this.authUrl, body, { headers })
      .pipe(
        map(response => {
          if (response && response.token) {
            this.setToken(response.token); 
            this.router.navigate(['/listar-videojuego']);
            return true;
          }
          return false;
        }),
        catchError(() => of(false))
      );
  }

  logout(): void {
    this.removeToken();
    this.router.navigate(['/login']);
  }

  getAuthStatus(): boolean {
    return this.getToken() !== null;
  }

  private setToken(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('token', token);
    } else {
      console.error('localStorage is not available');
    }
  }

  private getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    } else {
      console.error('localStorage is not available');
      return null;
    }
  }

  private removeToken(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
    } else {
      console.error('localStorage is not available');
    }
  }
}
