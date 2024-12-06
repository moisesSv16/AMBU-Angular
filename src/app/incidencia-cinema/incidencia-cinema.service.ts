import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private apiUrl = 'http://127.0.0.1:8000/obtenerIncidenciasCinemaConRelaciones'; 
  constructor(private http: HttpClient) { }

  // Método para obtener los registros de cine con relaciones
  obtenerRegistros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para obtener una incidencia por ID
  obtenerIncidenciaPorId(id: string): Observable<any> {
    const url = `http://127.0.0.1:8000/obtenerIncidenciasCinemaConRelaciones/incidencias/${id}`;
    return this.http.get<any>(url);
  }
}
