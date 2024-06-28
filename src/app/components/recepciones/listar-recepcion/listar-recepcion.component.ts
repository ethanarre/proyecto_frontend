import { Component, OnInit } from '@angular/core';
import { Recepcion } from '../../../models/recepcion.model';
import { RecepcionService } from '../../../services/recepcion/recepcion.service';

@Component({
  selector: 'app-listar-recepcion',
  templateUrl: './listar-recepcion.component.html',
  styleUrls: ['./listar-recepcion.component.css']
})
export class ListarRecepcionComponent implements OnInit {
  recepciones: Recepcion[] = [];

  constructor(private recepcionService: RecepcionService) { }

  ngOnInit(): void {
    this.cargarRecepciones();
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
