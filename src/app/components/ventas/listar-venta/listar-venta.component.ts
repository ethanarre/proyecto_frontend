import { Component, OnInit } from '@angular/core';
import { Venta } from '../../../models/venta.model';
import { VentaService } from '../../../services/venta/venta.service';

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.css']
})
export class ListarVentaComponent implements OnInit {
  ventas: Venta[] = []; 

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.cargarVentas();
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
