import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {
  private apiUrl = 'http://127.0.0.1:8000/incidencias'; // URL de la API de Laravel

  constructor(private http: HttpClient) {}

  // Método para obtener las incidencias de un tipo específico
  getIncidencias(tipo: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tipo=${tipo}`);
  }
}
