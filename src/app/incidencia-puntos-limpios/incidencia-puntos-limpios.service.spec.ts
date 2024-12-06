import { TestBed } from '@angular/core/testing';

import { IncidenciaPuntosLimpiosService } from './incidencia-puntos-limpios.service';

describe('IncidenciaPuntosLimpiosService', () => {
  let service: IncidenciaPuntosLimpiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenciaPuntosLimpiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
