import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videojuego } from '../../models/videojuego.model';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {
  private baseUrl = 'http://localhost:8080/api/videojuegos';

  constructor(private http: HttpClient) { }

  getVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(`${this.baseUrl}`);
  }

  createVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.http.post<Videojuego>(`${this.baseUrl}`, videojuego);
  }
}
