import { TestBed } from '@angular/core/testing';

import { ConcesionariosService } from './incidencia-concesionarios.service';

describe('ConcesionariosService', () => {
  let service: ConcesionariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcesionariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
