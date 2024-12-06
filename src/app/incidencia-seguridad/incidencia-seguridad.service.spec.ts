import { TestBed } from '@angular/core/testing';

import { IncidenciaSeguridadService } from './incidencia-seguridad.service';

describe('IncidenciaSeguridadService', () => {
  let service: IncidenciaSeguridadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenciaSeguridadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
