import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    LoginComponent,
    CrearVideojuegoComponent,
    ListarVideojuegoComponent,
    ListarEmpleadoComponent,
    CrearEmpleadoComponent,
    ListarClienteComponent,
    CrearClienteComponent,
    ListarRecepcionComponent,
    CrearRecepcionComponent,
    CrearPedidoComponent,
    ListarPedidoComponent,
    CrearVentaComponent,
    ListarVentaComponent,
    ListarDetallepdidoComponent,
    CrearDetallepedidoComponent,
    CrearCategoriaComponent,
    ListarCategoriaComponent,
    ListarDesarrolladorComponent,
    CrearDesarrolladorComponent,
    CrearPlataformaComponent,
    ListarPlataformaComponent,
    ListarCargoComponent,
    CrearCargoComponent,
    ListarEstadoComponent,
    CrearEstadoComponent,
    CrearTipopagoComponent,
    ListarTipopagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    [DatePipe],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
