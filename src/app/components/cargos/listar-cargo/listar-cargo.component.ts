import { Component, OnInit } from '@angular/core';
import { Cargo } from '../../../models/cargo.model';
import { CargoService } from '../../../services/cargo/cargo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cargos',
  templateUrl: './listar-cargos.component.html',
  styleUrls: ['./listar-cargos.component.css']
})
export class ListarCargosComponent implements OnInit {
  cargos: Cargo[] = [];

  constructor(private cargoService: CargoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarCargos();
  }

  cargarCargos(): void {
    this.cargoService.getCargos().subscribe(
      cargos => {
        this.cargos = cargos;
      },
      error => {
        console.error('Error al cargar cargos: ', error);
      }
    );
  }

  editarCargo(cargo: Cargo): void {
    this.router.navigate(['/editar-cargo', cargo.id]);
  }

  eliminarCargo(id: number): void {
    if (confirm('¿Está seguro de eliminar este cargo?')) {
      this.cargoService.eliminarCargo(id).subscribe(
        () => {
          // Recargar la lista después de eliminar
          this.cargarCargos();
        },
        error => {
          console.error('Error al eliminar cargo: ', error);
        }
      );
    }
  }
}
