import { TestBed } from '@angular/core/testing';

import { CinemaService } from './incidencia-cinema.service';

describe('IncidenciaCinemaService', () => {
  let service: CinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
