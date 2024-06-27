import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../../models/venta.model';
@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private baseUrl = 'http://localhost:8080/api/ventas';

  constructor(private http: HttpClient) { }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.baseUrl}`);
  }
}
