import { Component, OnInit } from '@angular/core';
import { Estado } from '../../../models/estado.model';
import { EstadoService } from '../../../services/estado/estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {
  estados: Estado[] = [];

  constructor(private estadoService: EstadoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarEstados();
  }

  cargarEstados(): void {
    this.estadoService.getEstados().subscribe(
      estados => {
        this.estados = estados;
      },
      error => {
        console.error('Error al cargar estados: ', error);
      }
    );
  }

  editarEstado(estado: Estado): void {
    this.router.navigate(['/editar-estado', estado.id]);
  }

  eliminarEstado(id: number): void {
    if (confirm('¿Está seguro de eliminar este estado?')) {
      this.estadoService.eliminarEstado(id).subscribe(
        () => {
          // Recargar la lista después de eliminar
          this.cargarEstados();
        },
        error => {
          console.error('Error al eliminar estado: ', error);
        }
      );
    }
  }
}
