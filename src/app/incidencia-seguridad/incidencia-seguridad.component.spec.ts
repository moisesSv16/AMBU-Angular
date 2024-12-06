import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaSeguridadComponent } from './incidencia-seguridad.component';

describe('IncidenciaSeguridadComponent', () => {
  let component: IncidenciaSeguridadComponent;
  let fixture: ComponentFixture<IncidenciaSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidenciaSeguridadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciaSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
