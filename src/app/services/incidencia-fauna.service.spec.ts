import { TestBed } from '@angular/core/testing';

import { IncidenciaFaunaService } from './incidencia-fauna.service';

describe('IncidenciaFaunaService', () => {
  let service: IncidenciaFaunaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenciaFaunaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
