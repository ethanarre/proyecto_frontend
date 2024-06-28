import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../../../models/videojuego.model';
import { VideojuegoService } from '../../../services/videojuego/videojuego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-videojuego',
  templateUrl: './listar-videojuego.component.html',
  styleUrls: ['./listar-videojuego.component.css']
})
export class ListarVideojuegoComponent implements OnInit {
  videojuegos: Videojuego[] = [];

  constructor(private videojuegoService: VideojuegoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarVideojuegos();
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

  getImageSrc(image: string): string {
    return 'data:image/jpeg;base64,' + image;
  }

  navigateToCrearVideojuego(): void {
    this.router.navigate(['/crear-videojuego']);
  }
}
