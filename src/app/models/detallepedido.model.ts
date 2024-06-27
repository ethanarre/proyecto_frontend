import { Videojuego } from './videojuego.model';
import { Pedido } from './pedido.model';

export interface DetallesPedido {
  id: number;
  idVideojuegos: Videojuego;
  cantidad: number;
  precio: number;
  idPedidos: Pedido;
}
