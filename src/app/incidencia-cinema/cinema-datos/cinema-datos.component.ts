import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../incidencia-cinema.service'; // Asegúrate de que este servicio esté creado
import * as $ from 'jquery';

@Component({
  selector: 'app-cinema-datos',
  templateUrl: './cinema-datos.component.html',
  styleUrls: ['./cinema-datos.component.css']
})
export class CinemaDatosComponent implements OnInit {
  incidenciaId: string | null = null;
  detalles: any = null; // Puedes tiparlo mejor si conoces la estructura de los datos

  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService // El servicio para obtener los detalles
  ) {}

  ngOnInit(): void {
    // Obtener el id de la incidencia desde la URL
    this.incidenciaId = this.route.snapshot.paramMap.get('id');
    if (this.incidenciaId) {
      this.cargarDetalles(this.incidenciaId);
    }
  }

  cargarDetalles(id: string): void {
    this.cinemaService.obtenerIncidenciaPorId(id).subscribe(
      (data: any) => {
        this.detalles = data;
      },
      (error) => {
        console.error('Error al cargar los detalles de la incidencia:', error);
      }
    );
  }
}
