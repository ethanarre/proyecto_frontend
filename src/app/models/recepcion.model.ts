import { Videojuego } from './videojuego.model';
import { LocalDateTime } from 'js-joda';

export interface Recepcion {
  id: number;
  videojuegos: Videojuego;
  fechaRecepcion: LocalDateTime;
  cantidad: number;
}
