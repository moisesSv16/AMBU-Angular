import { TestBed } from '@angular/core/testing';

import { IncidenciaJardineriaService } from './incidencia-jardineria.service';

describe('IncidenciaJardineriaService', () => {
  let service: IncidenciaJardineriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenciaJardineriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
