import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidenciasService } from '../incidencias-mantenimiento.service'; // Importa el servicio

@Component({
  selector: 'app-mantenimiento-datos',
  templateUrl: './mantenimiento-datos.component.html',
  styleUrls: ['./mantenimiento-datos.component.css']
})
export class MantenimientoDatosComponent implements OnInit {
  incidenciaId: number | null = null;
  incidencia: any = null; // Variable para almacenar los detalles de la incidencia

  constructor(
    private route: ActivatedRoute,
    private incidenciasService: IncidenciasService // Inyecta el servicio
  ) {}

  ngOnInit(): void {
    // Obtiene el ID de la incidencia desde la URL
    this.route.paramMap.subscribe(params => {
      this.incidenciaId = Number(params.get('id'));
      if (this.incidenciaId) {
        this.cargarDetalles(this.incidenciaId); // Llama al método para cargar los detalles
      }
    });
  }

  cargarDetalles(id: number): void {
    this.incidenciasService.obtenerIncidenciaPorId(id.toString()).subscribe(
      (data) => {
        this.incidencia = data; // Almacena los detalles de la incidencia
        console.log('Detalles de la incidencia:', this.incidencia);
      },
      (error) => {
        console.error('Error al cargar los detalles de la incidencia:', error);
      }
    );
  }
}
