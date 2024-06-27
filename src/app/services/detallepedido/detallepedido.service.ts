import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetallesPedido } from '../../models/detallepedido.model';

@Injectable({
  providedIn: 'root'
})
export class DetallePedidoService {
  private baseUrl = 'http://localhost:8080/api/detalles-pedido';

  constructor(private http: HttpClient) { }

  getDetallesPedidos(): Observable<DetallesPedido[]> {
    return this.http.get<DetallesPedido[]>(`${this.baseUrl}`);
  }

  eliminarDetallePedido(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
