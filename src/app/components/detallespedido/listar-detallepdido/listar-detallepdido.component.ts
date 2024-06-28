import { Component, OnInit } from '@angular/core';
import { DetallesPedido } from '../../../models/detallepedido.model';
import { DetallePedidoService } from '../../../services/detallepedido/detallepedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-detallepdido',
  templateUrl: './listar-detallepdido.component.html',
  styleUrls: ['./listar-detallepdido.component.css']
})
export class ListarDetallepdidoComponent implements OnInit {
  detallesPedidos: DetallesPedido[] = [];

  constructor(private detallePedidoService: DetallePedidoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarDetallesPedidos();
  }

  cargarDetallesPedidos(): void {
    this.detallePedidoService.getDetallesPedidos().subscribe(
      detalles => {
        this.detallesPedidos = detalles;
      },
      error => {
        console.error('Error al cargar detalles de pedidos: ', error);
      }
    );
  }

  editarDetalle(detalle: DetallesPedido): void {
    this.router.navigate(['/editar-detalle-pedido', detalle.id]);
  }

  eliminarDetalle(id: number): void {
    if (confirm('¿Está seguro de eliminar este detalle de pedido?')) {
      this.detallePedidoService.eliminarDetallePedido(id).subscribe(
        () => {
          // Recargar la lista después de eliminar
          this.cargarDetallesPedidos();
        },
        error => {
          console.error('Error al eliminar detalle de pedido: ', error);
        }
      );
    }
  }
}
