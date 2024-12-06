import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaPuntosLimpiosComponent } from './incidencia-puntos-limpios.component';

describe('IncidenciaPuntosLimpiosComponent', () => {
  let component: IncidenciaPuntosLimpiosComponent;
  let fixture: ComponentFixture<IncidenciaPuntosLimpiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidenciaPuntosLimpiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciaPuntosLimpiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
