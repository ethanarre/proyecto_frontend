import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDetallepedidoComponent } from './crear-detallepedido.component';

describe('CrearDetallepedidoComponent', () => {
  let component: CrearDetallepedidoComponent;
  let fixture: ComponentFixture<CrearDetallepedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearDetallepedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearDetallepedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
