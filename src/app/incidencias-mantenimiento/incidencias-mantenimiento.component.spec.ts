import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasMantenimientoComponent } from './incidencias-mantenimiento.component';

describe('IncidenciasMantenimientoComponent', () => {
  let component: IncidenciasMantenimientoComponent;
  let fixture: ComponentFixture<IncidenciasMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidenciasMantenimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciasMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
