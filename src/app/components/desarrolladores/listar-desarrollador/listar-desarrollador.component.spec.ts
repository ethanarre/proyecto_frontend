import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDesarrolladorComponent } from './listar-desarrollador.component';

describe('ListarDesarrolladorComponent', () => {
  let component: ListarDesarrolladorComponent;
  let fixture: ComponentFixture<ListarDesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarDesarrolladorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarDesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
