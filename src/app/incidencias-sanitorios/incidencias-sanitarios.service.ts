import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor(private http: HttpClient) { }

  // Obtener todos los registros de la tabla incidencia_sanitario
  obtenerRegistros(): Observable<any[]> {
    const url = 'http://127.0.0.1:8000/obtenerIncidenciasSanitariasConRelaciones';
    return this.http.get<any[]>(url);
  }

  // Método para obtener una incidencia sanitaria por su ID
  obtenerIncidenciaSanitariaPorId(id: string): Observable<any> {
    // Usar backticks para construir la URL
    const url = `http://127.0.0.1:8000/obtenerIncidenciaSanitariaPorId/${id}`;
    return this.http.get<any>(url);  // Hacer la solicitud HTTP al backend
  }
}
