import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeguridadService } from '../incidencia-seguridad.service'; 

@Component({
  selector: 'app-seguridad-datos',
  templateUrl: './seguridad-datos.component.html',
  styleUrls: ['./seguridad-datos.component.css']
})
export class SeguridadDatosComponent implements OnInit {

  incidenciaId: string | null = null;
  detalles: any = null;

  constructor(
    private route: ActivatedRoute,
    private seguridadService: SeguridadService
  ) {}

  ngOnInit(): void {
    this.incidenciaId = this.route.snapshot.paramMap.get('id');
    if (this.incidenciaId) {
      this.cargarDetalles(this.incidenciaId);
    }
  }

  cargarDetalles(id: string): void {
    this.seguridadService.obtenerIncidenciaPorId(id).subscribe(
      (data: any) => {
        this.detalles = data;
      },
      (error) => {
        console.error('Error al cargar los detalles de la incidencia:', error);
      }
    );
  }
}
