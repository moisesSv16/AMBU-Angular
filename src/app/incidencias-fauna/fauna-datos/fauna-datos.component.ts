import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidenciasService } from '../incidencias-fauna.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-fauna-datos',
  templateUrl: './fauna-datos.component.html',
  styleUrls: ['./fauna-datos.component.css']
})
export class FaunaDatosComponent implements OnInit {
  incidenciaId: string | null = null;
  detalles: any = null; // Mejor si puedes tipar con la estructura exacta de `detalles`

  constructor(
    private route: ActivatedRoute,
    private incidenciasService: IncidenciasService
  ) {}

  ngOnInit(): void {
    // Obtener el id de la incidencia desde la URL
    this.incidenciaId = this.route.snapshot.paramMap.get('id');
    if (this.incidenciaId) {
      this.cargarDetalles(this.incidenciaId);
    }
  }

  cargarDetalles(id: string): void {
    this.incidenciasService.obtenerIncidenciaPorId(id).subscribe(
      (data: any) => {
        this.detalles = data;
      },
      (error) => {
        console.error('Error al cargar los detalles de la incidencia:', error);
      }
    );
  }
}
