import { Component, OnInit } from '@angular/core';
import { TipoPago } from '../../../models/tipopago.model';
import { TipoPagoService } from '../../../services/tipopago/tipopago.service';

@Component({
  selector: 'app-listar-tipopago',
  templateUrl: './listar-tipopago.component.html',
  styleUrls: ['./listar-tipopago.component.css']
})
export class ListarTipopagoComponent implements OnInit {
  tiposPago: TipoPago[] = [];

  constructor(private tipoPagoService: TipoPagoService) { }

  ngOnInit(): void {
    this.cargarTiposPago();
  }

  cargarTiposPago(): void {
    this.tipoPagoService.getTiposPago().subscribe(
      tiposPago => {
        this.tiposPago = tiposPago;
      },
      error => {
        console.error('Error al cargar tipos de pago: ', error);
      }
    );
  }
}
