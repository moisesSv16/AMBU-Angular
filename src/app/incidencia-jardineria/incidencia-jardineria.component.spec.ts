import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaJardineriaComponent } from './incidencia-jardineria.component';

describe('IncidenciaJardineriaComponent', () => {
  let component: IncidenciaJardineriaComponent;
  let fixture: ComponentFixture<IncidenciaJardineriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidenciaJardineriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciaJardineriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
