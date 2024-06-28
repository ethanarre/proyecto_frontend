import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoPago } from '../../models/tipopago.model';

@Injectable({
  providedIn: 'root'
})
export class TipoPagoService {
  private baseUrl = 'http://localhost:8080/api/tipos-pago';

  constructor(private http: HttpClient) { }

  getTiposPago(): Observable<TipoPago[]> {
    return this.http.get<TipoPago[]>(`${this.baseUrl}`);
  }
}
