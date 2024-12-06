import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMantenimientoComponent } from './modal-mantenimiento.component';

describe('ModalMantenimientoComponent', () => {
  let component: ModalMantenimientoComponent;
  let fixture: ComponentFixture<ModalMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalMantenimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
