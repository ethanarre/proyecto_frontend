import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRecepcionComponent } from './listar-recepcion.component';

describe('ListarRecepcionComponent', () => {
  let component: ListarRecepcionComponent;
  let fixture: ComponentFixture<ListarRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarRecepcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
