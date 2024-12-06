import { TestBed } from '@angular/core/testing';

import { IncidenciasService } from './incidencias-sanitarios.service';

describe('IncidenciasService', () => {
  let service: IncidenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
