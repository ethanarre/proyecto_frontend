import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../../models/categoria.model';
import { CategoriaService } from '../../../services/categoria/categoria.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.categoriaService.getCategorias().subscribe(
      categorias => {
        this.categorias = categorias;
      },
      error => {
        console.error('Error al cargar categorías: ', error);
      }
    );
  }

  editarCategoria(categoria: Categoria): void {
    this.router.navigate(['/editar-categoria', categoria.id]);
  }

  eliminarCategoria(id: number): void {
    if (confirm('¿Está seguro de eliminar esta categoría?')) {
      this.categoriaService.eliminarCategoria(id).subscribe(
        () => {
          // Recargar la lista después de eliminar
          this.cargarCategorias();
        },
        error => {
          console.error('Error al eliminar categoría: ', error);
        }
      );
    }
  }
}
