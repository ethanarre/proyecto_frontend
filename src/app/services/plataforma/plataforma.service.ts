import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plataforma } from '../../models/plataforma.model';
@Injectable({
  providedIn: 'root'
})
export class PlataformaService {
  private baseUrl = 'http://localhost:8080/api/plataformas';

  constructor(private http: HttpClient) { }

  getPlataformas(): Observable<Plataforma[]> {
    return this.http.get<Plataforma[]>(`${this.baseUrl}`);
  }

  eliminarPlataforma(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
