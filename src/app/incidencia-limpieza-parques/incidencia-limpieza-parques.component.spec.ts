import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaLimpiezaParquesComponent } from './incidencia-limpieza-parques.component';

describe('IncidenciaLimpiezaParquesComponent', () => {
  let component: IncidenciaLimpiezaParquesComponent;
  let fixture: ComponentFixture<IncidenciaLimpiezaParquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidenciaLimpiezaParquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciaLimpiezaParquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
