import { Categoria } from './categoria.model';
import { Desarrollador } from './desarrollador.model';
import { Plataforma } from './plataforma.model';

export interface Videojuego {
  id: number;
  nombre: string;
  imagen: string; 
  descripcion: string;
  idCategoria: Categoria;
  idDesarrollador: Desarrollador;
  idPlataforma: Plataforma;
  precio: number;
  stock: number;
}
