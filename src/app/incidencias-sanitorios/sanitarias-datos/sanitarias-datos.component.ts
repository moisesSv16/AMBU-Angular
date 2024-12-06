import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { IncidenciasService } from '../incidencias-sanitarios.service';

@Component({
  selector: 'app-sanitarias-datos',
  templateUrl: './sanitarias-datos.component.html',
  styleUrls: ['./sanitarias-datos.component.css']
})
export class SanitariasDatosComponent implements OnInit {
  incidenciaId: string | null = null;  // Almacena el id de la incidencia
  detalles: any = null;  // Almacena los detalles de la incidencia

  constructor(
    private route: ActivatedRoute,  // Inyecta ActivatedRoute para obtener los parámetros de la ruta
    private incidenciasService: IncidenciasService  // Inyecta el servicio para obtener los datos del backend
  ) {}

  ngOnInit(): void {
    // Obtener el id de la incidencia desde la URL
    this.incidenciaId = this.route.snapshot.paramMap.get('id');  // Obtener el parámetro 'id' de la URL
    console.log('ID de la incidencia:', this.incidenciaId);  // Verificar que se está recibiendo el id correctamente
    if (this.incidenciaId) {
      // Cargar los detalles de la incidencia sanitaria
      this.cargarDetalles(this.incidenciaId);
    }
  }

  // Cargar los detalles de la incidencia sanitaria desde el servicio
  cargarDetalles(id: string): void {
    this.incidenciasService.obtenerIncidenciaSanitariaPorId(id).subscribe(
      (data: any) => {
        // console.log('Detalles de la incidencia recibidos:', data);  // Verifica si llegan los datos
        // console.log('Tipo de created_at:', typeof data.created_at);  // Verifica si los valores son correctos
        // console.log('Tipo de updated_at:', typeof data.updated_at);
        this.detalles = data;  // Asigna los datos recibidos
      },
      (error) => {
        console.error('Error al cargar los detalles de la incidencia sanitaria:', error);
      }
    );
  }
  
  
}
