import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recepcion } from '../../models/recepcion.model';
@Injectable({
  providedIn: 'root'
})
export class RecepcionService {
  private baseUrl = 'http://localhost:8080/api/recepciones';

  constructor(private http: HttpClient) { }

  getRecepciones(): Observable<Recepcion[]> {
    return this.http.get<Recepcion[]>(`${this.baseUrl}`);
  }
}
