import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../models/empleado.model';
import { EmpleadoService } from '../../../services/empleado/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(
      empleados => {
        this.empleados = empleados;
      },
      error => {
        console.error('Error al cargar empleados: ', error);
      }
    );
  }

  editarEmpleado(empleado: Empleado): void {
    this.router.navigate(['/editar-empleado', empleado.id]);
  }

  eliminarEmpleado(id: number): void {
    if (confirm('¿Está seguro de eliminar este empleado?')) {
      this.empleadoService.eliminarEmpleado(id).subscribe(
        () => {
          // Recargar la lista después de eliminar
          this.cargarEmpleados();
        },
        error => {
          console.error('Error al eliminar empleado: ', error);
        }
      );
    }
  }
}
