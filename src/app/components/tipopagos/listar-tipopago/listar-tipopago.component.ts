import { Component, OnInit } from '@angular/core';
import { TipoPago } from '../../../models/tipopago.model';
import { TipoPagoService } from '../../../services/tipopago/tipopago.service';

@Component({
  selector: 'app-listar-tipos-pago',
  templateUrl: './listar-tipos-pago.component.html',
  styleUrls: ['./listar-tipos-pago.component.css']
})
export class ListarTipoPagoComponent implements OnInit {
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
