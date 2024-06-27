import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../../models/pedido.model';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private baseUrl = 'http://localhost:8080/api/pedidos';

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}`);
  }

  eliminarPedido(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
