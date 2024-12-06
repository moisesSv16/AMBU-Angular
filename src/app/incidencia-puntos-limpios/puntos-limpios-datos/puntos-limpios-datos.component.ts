import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuntosLimpiosService } from '../incidencia-puntos-limpios.service'; 

@Component({
  selector: 'app-puntos-limpios-datos',
  templateUrl: './puntos-limpios-datos.component.html',
  styleUrls: ['./puntos-limpios-datos.component.css']
})
export class PuntosLimpiosDatosComponent implements OnInit {

  incidenciaId: string | null = null;
  detalles: any = null;
 
  constructor(
    private route: ActivatedRoute,
    private puntosLimpiosService: PuntosLimpiosService
  ) {}

  ngOnInit(): void {
    this.incidenciaId = this.route.snapshot.paramMap.get('id');
    if (this.incidenciaId) {
      this.cargarDetalles(this.incidenciaId);
    }
  }

  cargarDetalles(id: string): void {
    this.puntosLimpiosService.obtenerIncidenciaPorId(id).subscribe(
      (data: any) => {
        this.detalles = data;
      },
      (error) => {
        console.error('Error al cargar los detalles de la incidencia:', error);
      }
    );
  }
}
