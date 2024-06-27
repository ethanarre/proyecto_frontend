import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVideojuegoComponent } from './listar-videojuego.component';

describe('ListarVideojuegoComponent', () => {
  let component: ListarVideojuegoComponent;
  let fixture: ComponentFixture<ListarVideojuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarVideojuegoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
