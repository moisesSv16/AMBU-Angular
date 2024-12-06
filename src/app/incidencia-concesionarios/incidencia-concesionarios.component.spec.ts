import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaConcesionariosComponent } from './incidencia-concesionarios.component';

describe('IncidenciaConcesionariosComponent', () => {
  let component: IncidenciaConcesionariosComponent;
  let fixture: ComponentFixture<IncidenciaConcesionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidenciaConcesionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciaConcesionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
