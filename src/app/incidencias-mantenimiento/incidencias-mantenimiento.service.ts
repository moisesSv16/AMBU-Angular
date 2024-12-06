import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  // Rutas específicas sin baseUrl
  private obtenerIncidenciasUrl = 'http://127.0.0.1:8000/obtenerIncidenciasInfraestructuraConRelaciones';
  private obtenerIncidenciaPorIdUrl = 'http://127.0.0.1:8000/obtenerIncidenciasInfraestructuraConRelaciones/incidencias';

  constructor(private http: HttpClient) { }

  // Método para obtener todas las incidencias
  obtenerRegistros(): Observable<any[]> {
    return this.http.get<any[]>(this.obtenerIncidenciasUrl);
  }

  // Método para obtener una incidencia específica por ID
  obtenerIncidenciaPorId(id: string): Observable<any> {  
    const url = `${this.obtenerIncidenciaPorIdUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
