import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasSanitoriosComponent } from './incidencias-sanitorios.component';

describe('IncidenciasSanitoriosComponent', () => {
  let component: IncidenciasSanitoriosComponent;
  let fixture: ComponentFixture<IncidenciasSanitoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidenciasSanitoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciasSanitoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
