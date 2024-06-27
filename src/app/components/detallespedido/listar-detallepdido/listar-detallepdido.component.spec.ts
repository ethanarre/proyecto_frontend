import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDetallepdidoComponent } from './listar-detallepdido.component';

describe('ListarDetallepdidoComponent', () => {
  let component: ListarDetallepdidoComponent;
  let fixture: ComponentFixture<ListarDetallepdidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarDetallepdidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarDetallepdidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
