import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoPagoComponent } from './listar-tipopago.component';

describe('ListarTipopagoComponent', () => {
  let component: ListarTipoPagoComponent;
  let fixture: ComponentFixture<ListarTipoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTipoPagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTipoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
