import { Component, OnInit } from '@angular/core';
import { Venta } from '../../../models/venta.model';
import { VentaService } from '../../../services/venta/venta.service';

@Component({
  selector: 'app-listar-ventas',
  templateUrl: './listar-ventas.component.html',
  styleUrls: ['./listar-ventas.component.css']
})
export class ListarVentasComponent implements OnInit {
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
