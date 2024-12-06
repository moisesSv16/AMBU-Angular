import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionariosDatosComponent } from './concesionarios-datos.component';

describe('ConcesionariosDatosComponent', () => {
  let component: ConcesionariosDatosComponent;
  let fixture: ComponentFixture<ConcesionariosDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcesionariosDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcesionariosDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
