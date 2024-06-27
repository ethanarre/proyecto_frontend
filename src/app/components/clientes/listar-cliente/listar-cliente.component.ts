import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clienteService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      },
      error => {
        console.error('Error al cargar clientes: ', error);
      }
    );
  }

  editarCliente(cliente: Cliente): void {
    this.router.navigate(['/editar-cliente', cliente.id]);
  }

  eliminarCliente(id: number): void {
    if (confirm('¿Está seguro de eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe(
        () => {
          // Recargar la lista después de eliminar
          this.cargarClientes();
        },
        error => {
          console.error('Error al eliminar cliente: ', error);
        }
      );
    }
  }
}
