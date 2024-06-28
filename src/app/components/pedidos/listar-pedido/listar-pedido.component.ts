import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/pedido.model';
import { PedidoService } from '../../../services/pedido/pedido.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LocalDateTime } from 'js-joda';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService, private router: Router, private datePipe: DatePipe) { }

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

  convertirFecha(localDateTime: LocalDateTime): string {
    const date = new Date(localDateTime.toString());
    const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm');
  
    if (formattedDate !== null) {
      return formattedDate;
    } else {
      return 'Invalid date'; // or any other default value
    }
  }
}
