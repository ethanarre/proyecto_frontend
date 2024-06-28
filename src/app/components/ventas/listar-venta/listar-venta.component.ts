import { Component, OnInit } from '@angular/core';
import { Venta } from '../../../models/venta.model';
import { VentaService } from '../../../services/venta/venta.service';
import { DatePipe } from '@angular/common';
import { LocalDateTime } from 'js-joda';

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.css']
})
export class ListarVentaComponent implements OnInit {
  ventas: Venta[] = []; 

  constructor(private ventaService: VentaService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.cargarVentas();
  }

  convertirFecha(localDateTime: LocalDateTime): Date {
    return new Date(localDateTime.toString());
  }

  formatearFecha(localDateTime: LocalDateTime): string | null {
    const date = this.convertirFecha(localDateTime);
    return this.datePipe.transform(date, 'medium');
  }

  cargarVentas(): void {
    this.ventaService.getVentas().subscribe(
      ventas => {
        this.ventas = ventas;
      },
      error => {
        console.error('Error al cargar ventas: ', error);
      }
    );
  }
}
