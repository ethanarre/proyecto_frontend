import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargo.model';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private baseUrl = 'http://localhost:8080/api/cargos';

  constructor(private http: HttpClient) { }

  getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${this.baseUrl}`);
  }

  eliminarCargo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
