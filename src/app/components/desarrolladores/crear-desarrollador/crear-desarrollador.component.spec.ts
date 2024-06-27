import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDesarrolladorComponent } from './crear-desarrollador.component';

describe('CrearDesarrolladorComponent', () => {
  let component: CrearDesarrolladorComponent;
  let fixture: ComponentFixture<CrearDesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearDesarrolladorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearDesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
