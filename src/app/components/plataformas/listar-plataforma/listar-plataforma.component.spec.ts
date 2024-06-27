import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlataformaComponent } from './listar-plataforma.component';

describe('ListarPlataformaComponent', () => {
  let component: ListarPlataformaComponent;
  let fixture: ComponentFixture<ListarPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarPlataformaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
