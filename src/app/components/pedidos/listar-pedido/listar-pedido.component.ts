import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/pedido.model';
import { PedidoService } from '../../../services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {
  pedidos: Pedido[];

  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos(): void {
    this.pedidoService.getPedidos().subscribe(
      pedidos => {
        this.pedidos = pedidos;
      },
      error => {
        console.error('Error al cargar pedidos: ', error);
      }
    );
  }

  verDetalles(pedido: Pedido): void {
    this.router.navigate(['/detalles-pedido', pedido.id]);
  }

  eliminarPedido(id: number): void {
    if (confirm('¿Está seguro de eliminar este pedido?')) {
      this.pedidoService.eliminarPedido(id).subscribe(
        () => {
          // Recargar la lista después de eliminar
          this.cargarPedidos();
        },
        error => {
          console.error('Error al eliminar pedido: ', error);
        }
      );
    }
  }
}
