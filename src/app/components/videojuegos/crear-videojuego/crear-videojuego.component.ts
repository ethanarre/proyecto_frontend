import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../../../models/videojuego.model';
import { VideojuegoService } from '../../../services/videojuego/videojuego.service';
import { Categoria } from '../../../models/categoria.model';
import { Desarrollador } from '../../../models/desarrollador.model';
import { Plataforma } from '../../../models/plataforma.model';

import { CategoriaService } from '../../../services/categoria/categoria.service';
import { DesarrolladorService } from '../../../services/desarrollador/desarrollador.service';
import { PlataformaService } from '../../../services/plataforma/plataforma.service';

@Component({
  selector: 'app-crear-videojuego',
  templateUrl: './crear-videojuego.component.html',
  styleUrl: './crear-videojuego.component.css'
})
export class CrearVideojuegoComponent implements OnInit {

  videojuegos: Videojuego[] = [];
  categorias: Categoria[] = [];
  desarrolladores: Desarrollador[] = [];
  plataformas: Plataforma[] = [];
  selectedFile: File | null = null;


  nuevoVideojuego: Videojuego = {
    id: 0,
    nombre: '',
    imagen: '',
    descripcion: '',
    idCategoria: { id: 0, nombre: '', descripcion: '' },
    idDesarrollador: { id: 0, nombre: '' },
    idPlataforma: { id: 0, nombre: '' },
    precio: 0,
    stock: 0
  };

  constructor(
    private videojuegoService: VideojuegoService,
    private categoriaService: CategoriaService,
    private desarrolladorService: DesarrolladorService,
    private plataformaService: PlataformaService,
  ) { }

  ngOnInit(): void {
    this.cargarVideojuegos();
    this.cargarCategorias();
    this.cargarDesarrolladores();
    this.cargarPlataformas();
  }

  cargarVideojuegos(): void {
    this.videojuegoService.getVideojuegos().subscribe(
      videojuegos => {
        this.videojuegos = videojuegos;
      },
      error => {
        console.error('Error al cargar videojuegos: ', error);
      }
    );
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

  getImageSrc(image: any): string {
    return 'data:image/jpeg;base64,' + image;
  }

  onFileChange(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.nuevoVideojuego.imagen = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  crearVideojuego(): void {
    this.videojuegoService.createVideojuego(this.nuevoVideojuego).subscribe(
      response => {
        console.log('Videojuego creado: ', response);
        this.cargarVideojuegos();
        this.nuevoVideojuego = {
          id: 0,
          nombre: '',
          imagen: '',
          descripcion: '',
          idCategoria: { id: 0, nombre: '', descripcion: '' },
          idDesarrollador: { id: 0, nombre: '' },
          idPlataforma: { id: 0, nombre: '' },
          precio: 0,
          stock: 0
        };
      },
      error => {
        console.error('Error al crear videojuego: ', error);
      }
    );
  }
}