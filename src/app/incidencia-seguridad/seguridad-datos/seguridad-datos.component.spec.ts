import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadDatosComponent } from './seguridad-datos.component';

describe('SeguridadDatosComponent', () => {
  let component: SeguridadDatosComponent;
  let fixture: ComponentFixture<SeguridadDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguridadDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguridadDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
