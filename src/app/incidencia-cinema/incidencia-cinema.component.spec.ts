import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaCinemaComponent } from './incidencia-cinema.component';

describe('IncidenciaCinemaComponent', () => {
  let component: IncidenciaCinemaComponent;
  let fixture: ComponentFixture<IncidenciaCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidenciaCinemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciaCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
