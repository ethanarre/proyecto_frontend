import { Categoria } from './categoria.model';
import { Desarrollador } from './desarrollador.model';
import { Plataforma } from './plataforma.model';

export interface Videojuego {
  id: number;
  nombre: string;
  imagen: string; // asumiendo que en Angular manejas la imagen como un string (URL o base64)
  descripcion: string;
  idCategoria: Categoria;
  idDesarrollador: Desarrollador;
  idPlataforma: Plataforma;
  precio: number;
  stock: number;
}
