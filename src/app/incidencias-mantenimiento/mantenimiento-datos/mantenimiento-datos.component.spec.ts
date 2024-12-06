import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDatosComponent } from './mantenimiento-datos.component';

describe('MantenimientoDatosComponent', () => {
  let component: MantenimientoDatosComponent;
  let fixture: ComponentFixture<MantenimientoDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MantenimientoDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MantenimientoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
