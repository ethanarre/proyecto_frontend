import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlataformaComponent } from './crear-plataforma.component';

describe('CrearPlataformaComponent', () => {
  let component: CrearPlataformaComponent;
  let fixture: ComponentFixture<CrearPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearPlataformaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
