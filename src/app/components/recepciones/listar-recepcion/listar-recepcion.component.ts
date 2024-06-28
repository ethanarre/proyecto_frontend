import { Component, OnInit } from '@angular/core';
import { Recepcion } from '../../../models/recepcion.model';
import { RecepcionService } from '../../../services/recepcion/recepcion.service';
import { DatePipe } from '@angular/common';
import { LocalDateTime } from 'js-joda';

@Component({
  selector: 'app-listar-recepcion',
  templateUrl: './listar-recepcion.component.html',
  styleUrls: ['./listar-recepcion.component.css']
})
export class ListarRecepcionComponent implements OnInit {
  recepciones: Recepcion[] = [];

  constructor(private recepcionService: RecepcionService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.cargarRecepciones();
  }

  convertirFecha(localDateTime: LocalDateTime): Date {
    return new Date(localDateTime.toString());
  }

  formatearFecha(localDateTime: LocalDateTime): string | null {
    const date = this.convertirFecha(localDateTime);
    return this.datePipe.transform(date, 'medium');
  }

  cargarRecepciones(): void {
    this.recepcionService.getRecepciones().subscribe(
      recepciones => {
        this.recepciones = recepciones;
      },
      error => {
        console.error('Error al cargar recepciones: ', error);
      }
    );
  }
}
