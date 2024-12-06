import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  // URL para obtener todas las incidencias forestales
  private apiUrlTodas = 'http://127.0.0.1:8000/obtenerIncidenciasForestalConRelaciones';
  
  // URL base para obtener una incidencia forestal por ID
  private apiUrlPorId = 'http://127.0.0.1:8000/obtenerIncidenciasForestalConRelaciones/incidencias';

  constructor(private http: HttpClient) { }

  // Método para obtener todas las incidencias
  obtenerRegistros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlTodas);
  }

  // Método para obtener una incidencia por ID
  obtenerRegistroPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlPorId}/${id}`);
  }
}
