import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaParquesDatosComponent } from './limpieza-parques-datos.component';

describe('LimpiezaParquesDatosComponent', () => {
  let component: LimpiezaParquesDatosComponent;
  let fixture: ComponentFixture<LimpiezaParquesDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LimpiezaParquesDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LimpiezaParquesDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
