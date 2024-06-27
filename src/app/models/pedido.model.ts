import { Empleado } from './empleado.model';
import { Cliente } from './cliente.model';
import { Estado } from './estado.model';
import { LocalDateTime } from 'js-joda';

export interface Pedido {
  id: number;
  fechaPedido: LocalDateTime;
  idEmpleado: Empleado;
  idCliente: Cliente;
  idEstado: Estado;
}
