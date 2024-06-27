import { Component, OnInit } from '@angular/core';
import { Plataforma } from '../../../models/plataforma.model';
import { PlataformaService } from '../../../services/plataforma/plataforma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-plataformas',
  templateUrl: './listar-plataformas.component.html',
  styleUrls: ['./listar-plataformas.component.css']
})
export class ListarPlataformasComponent implements OnInit {
  plataformas: Plataforma[] = [];

  constructor(private plataformaService: PlataformaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPlataformas();
  }

  cargarPlataformas(): void {
    this.plataformaService.getPlataformas().subscribe(
      plataformas => {
        this.plataformas = plataformas;
      },
      error => {
        console.error('Error al cargar plataformas: ', error);
      }
    );
  }

  editarPlataforma(id: number): void {
    this.router.navigate(['/editar-plataforma', id]);
  }

  eliminarPlataforma(id: number): void {
    if (confirm('¿Está seguro de eliminar esta plataforma?')) {
      this.plataformaService.eliminarPlataforma(id).subscribe(
        () => {
          // Recargar la lista después de eliminar
          this.cargarPlataformas();
        },
        error => {
          console.error('Error al eliminar plataforma: ', error);
        }
      );
    }
  }
}
