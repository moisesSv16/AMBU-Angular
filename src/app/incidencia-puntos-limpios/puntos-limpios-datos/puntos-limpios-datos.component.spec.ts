import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosLimpiosDatosComponent } from './puntos-limpios-datos.component';

describe('PuntosLimpiosDatosComponent', () => {
  let component: PuntosLimpiosDatosComponent;
  let fixture: ComponentFixture<PuntosLimpiosDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PuntosLimpiosDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PuntosLimpiosDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
