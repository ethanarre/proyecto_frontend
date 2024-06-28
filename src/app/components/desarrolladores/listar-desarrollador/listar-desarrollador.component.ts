import { Component, OnInit } from '@angular/core';
import { Desarrollador } from '../../../models/desarrollador.model';
import { DesarrolladorService } from '../../../services/desarrollador/desarrollador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-desarrollador',
  templateUrl: './listar-desarrollador.component.html',
  styleUrls: ['./listar-desarrollador.component.css']
})
export class ListarDesarrolladorComponent implements OnInit {
  desarrolladores: Desarrollador[] = []; 

  constructor(private desarrolladorService: DesarrolladorService, private router: Router) { }

  ngOnInit(): void {
    this.cargarDesarrolladores();
  }

  cargarDesarrolladores(): void {
    this.desarrolladorService.getDesarrolladores().subscribe(
      desarrolladores => {
        this.desarrolladores = desarrolladores;
      },
      error => {
        console.error('Error al cargar desarrolladores: ', error);
      }
    );
  }

  editarDesarrollador(desarrollador: Desarrollador): void {
    this.router.navigate(['/editar-desarrollador', desarrollador.id]);
  }

  eliminarDesarrollador(id: number): void {
    if (confirm('¿Está seguro de eliminar este desarrollador?')) {
      this.desarrolladorService.eliminarDesarrollador(id).subscribe(
        () => {
          // Recargar la lista después de eliminar
          this.cargarDesarrolladores();
        },
        error => {
          console.error('Error al eliminar desarrollador: ', error);
        }
      );
    }
  }
}
