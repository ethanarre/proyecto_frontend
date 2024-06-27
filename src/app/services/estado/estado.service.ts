import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from '../../models/estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private baseUrl = 'http://localhost:8080/api/estados';

  constructor(private http: HttpClient) { }

  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${this.baseUrl}`);
  }

  eliminarEstado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
