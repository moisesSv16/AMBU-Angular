import { TestBed } from '@angular/core/testing';

import { IncidenciaLimpiezaParquesService } from './incidencia-limpieza-parques.service';

describe('IncidenciaLimpiezaParquesService', () => {
  let service: IncidenciaLimpiezaParquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenciaLimpiezaParquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
