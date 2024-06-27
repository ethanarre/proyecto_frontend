import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseUrl = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.baseUrl}`);
  }

  eliminarEmpleado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
