import { Pedido } from './pedido.model';
import { TipoPago } from './tipopago.model';
import { LocalDateTime } from 'js-joda';

export interface Venta {
  id: number;
  idPedido: Pedido;
  fechaVenta: LocalDateTime;
  totalPagar: number;
  idTipoPago: TipoPago;
}
