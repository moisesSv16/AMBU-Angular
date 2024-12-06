import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasFaunaComponent } from './incidencias-fauna.component';

describe('IncidenciasFaunaComponent', () => {
  let component: IncidenciasFaunaComponent;
  let fixture: ComponentFixture<IncidenciasFaunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidenciasFaunaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciasFaunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
