import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Desarrollador } from '../../models/desarrollador.model';
@Injectable({
  providedIn: 'root'
})
export class DesarrolladorService {
  private baseUrl = 'http://localhost:8080/api/desarrolladores';

  constructor(private http: HttpClient) { }

  getDesarrolladores(): Observable<Desarrollador[]> {
    return this.http.get<Desarrollador[]>(`${this.baseUrl}`);
  }

  eliminarDesarrollador(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
