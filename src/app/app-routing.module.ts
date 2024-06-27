import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { LoginComponent } from './components/login/login.component';

import { CrearVideojuegoComponent } from './components/videojuegos/crear-videojuego/crear-videojuego.component';
import { ListarVideojuegoComponent } from './components/videojuegos/listar-videojuego/listar-videojuego.component';

import { ListarEmpleadoComponent } from './components/empleados/listar-empleado/listar-empleado.component';
import { CrearEmpleadoComponent } from './components/empleados/crear-empleado/crear-empleado.component';

import { ListarClienteComponent } from './components/clientes/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './components/clientes/crear-cliente/crear-cliente.component';

import { ListarRecepcionComponent } from './components/recepciones/listar-recepcion/listar-recepcion.component';
import { CrearRecepcionComponent } from './components/recepciones/crear-recepcion/crear-recepcion.component';

import { CrearPedidoComponent } from './components/pedidos/crear-pedido/crear-pedido.component';
import { ListarPedidoComponent } from './components/pedidos/listar-pedido/listar-pedido.component';

import { CrearVentaComponent } from './components/ventas/crear-venta/crear-venta.component';
import { ListarVentaComponent } from './components/ventas/listar-venta/listar-venta.component';

import { ListarDetallepdidoComponent } from './components/detallespedido/listar-detallepdido/listar-detallepdido.component';
import { CrearDetallepedidoComponent } from './components/detallespedido/crear-detallepedido/crear-detallepedido.component';

import { CrearCategoriaComponent } from './components/categorias/crear-categoria/crear-categoria.component';
import { ListarCategoriaComponent } from './components/categorias/listar-categoria/listar-categoria.component';

import { ListarDesarrolladorComponent } from './components/desarrolladores/listar-desarrollador/listar-desarrollador.component';
import { CrearDesarrolladorComponent } from './components/desarrolladores/crear-desarrollador/crear-desarrollador.component';

import { CrearPlataformaComponent } from './components/plataformas/crear-plataforma/crear-plataforma.component';
import { ListarPlataformaComponent } from './components/plataformas/listar-plataforma/listar-plataforma.component';

import { ListarCargoComponent } from './components/cargos/listar-cargo/listar-cargo.component';
import { CrearCargoComponent } from './components/cargos/crear-cargo/crear-cargo.component';

import { ListarEstadoComponent } from './components/estados/listar-estado/listar-estado.component';
import { CrearEstadoComponent } from './components/estados/crear-estado/crear-estado.component';

import { CrearTipopagoComponent } from './components/tipopagos/crear-tipopago/crear-tipopago.component';
import { ListarTipopagoComponent } from './components/tipopagos/listar-tipopago/listar-tipopago.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},

  { path: 'listar-videojuego', component: ListarVideojuegoComponent, canActivate: [AuthGuard] },
  { path: 'crear-videojuego', component: CrearVideojuegoComponent, canActivate: [AuthGuard] },
  { path: 'editar-videojuego/:id', component: CrearVideojuegoComponent, canActivate: [AuthGuard] },

  { path: 'listar-empleado', component: ListarEmpleadoComponent, canActivate: [AuthGuard] },
  { path: 'crear-empleado', component: CrearEmpleadoComponent, canActivate: [AuthGuard] },
  { path: 'editar-empleado/:id', component: CrearEmpleadoComponent, canActivate: [AuthGuard] },

  { path: 'listar-cliente', component: ListarClienteComponent, canActivate: [AuthGuard] },
  { path: 'crear-cliente', component: CrearClienteComponent, canActivate: [AuthGuard] },
  { path: 'editar-cliente/:id', component: CrearClienteComponent, canActivate: [AuthGuard] },

  { path: 'listar-recepcion', component: ListarRecepcionComponent, canActivate: [AuthGuard] },
  { path: 'crear-recepcion', component: CrearRecepcionComponent, canActivate: [AuthGuard] },
  { path: 'editar-recepcion/:id', component: CrearRecepcionComponent, canActivate: [AuthGuard] },

  { path: 'listar-pedido', component: ListarPedidoComponent, canActivate: [AuthGuard] },
  { path: 'crear-pedido', component: CrearPedidoComponent, canActivate: [AuthGuard] },
  { path: 'editar-pedido/:id', component: CrearPedidoComponent, canActivate: [AuthGuard] },

  { path: 'listar-venta', component: ListarVentaComponent, canActivate: [AuthGuard] },
  { path: 'crear-venta', component: CrearVentaComponent, canActivate: [AuthGuard] },
  { path: 'editar-venta/:id', component: CrearVentaComponent, canActivate: [AuthGuard] },

  { path: 'listar-detallespedido', component: ListarDetallepdidoComponent, canActivate: [AuthGuard] },
  { path: 'crear-detallespedido', component: CrearDetallepedidoComponent, canActivate: [AuthGuard] },
  { path: 'editar-detallespedido/:id', component: CrearDetallepedidoComponent, canActivate: [AuthGuard] },

  { path: 'listar-categoria', component: ListarCategoriaComponent, canActivate: [AuthGuard] },
  { path: 'crear-categoria', component: CrearCategoriaComponent, canActivate: [AuthGuard] },
  { path: 'editar-categoria/:id', component: CrearCategoriaComponent, canActivate: [AuthGuard] },

  { path: 'listar-desarrollador', component: ListarDesarrolladorComponent, canActivate: [AuthGuard] },
  { path: 'crear-desarrollador', component: CrearDesarrolladorComponent, canActivate: [AuthGuard] },
  { path: 'editar-desarrollador/:id', component: CrearDesarrolladorComponent, canActivate: [AuthGuard] },

  { path: 'listar-plataforma', component: ListarPlataformaComponent, canActivate: [AuthGuard] },
  { path: 'crear-plataforma', component: CrearPlataformaComponent, canActivate: [AuthGuard] },
  { path: 'editar-plataforma/:id', component: CrearPlataformaComponent, canActivate: [AuthGuard] },

  { path: 'listar-cargo', component: ListarCargoComponent, canActivate: [AuthGuard] },
  { path: 'crear-cargo', component: CrearCargoComponent, canActivate: [AuthGuard] },
  { path: 'editar-cargo/:id', component: CrearCargoComponent, canActivate: [AuthGuard] },

  { path: 'listar-estado', component: ListarEstadoComponent, canActivate: [AuthGuard] },
  { path: 'crear-estado', component: CrearEstadoComponent, canActivate: [AuthGuard] },
  { path: 'editar-estado/:id', component: CrearEstadoComponent, canActivate: [AuthGuard] },

  { path: 'listar-tipopago', component: ListarTipopagoComponent, canActivate: [AuthGuard] },
  { path: 'crear-tipopago', component: CrearTipopagoComponent, canActivate: [AuthGuard] },
  { path: 'editar-tipopago/:id', component: CrearTipopagoComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/login', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
