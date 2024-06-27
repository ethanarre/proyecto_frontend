import { Cargo } from './cargo.model';
import { LocalDateTime } from 'js-joda';

export interface Empleado {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  contrasena: string;
  idCargo: Cargo;
  dni: string;
  celular: string;
  fechaContratado: LocalDateTime;
}
