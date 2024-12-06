import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasForestalComponent } from './incidencias-forestal.component';

describe('IncidenciasForestalComponent', () => {
  let component: IncidenciasForestalComponent;
  let fixture: ComponentFixture<IncidenciasForestalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidenciasForestalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciasForestalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
