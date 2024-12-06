import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LimpiezaParquesService } from '../incidencia-limpieza-parques.service'; // Asegúrate de que este servicio esté creado

@Component({
  selector: 'app-limpieza-parques-datos',
  templateUrl: './limpieza-parques-datos.component.html',
  styleUrls: ['./limpieza-parques-datos.component.css']
})
export class LimpiezaParquesDatosComponent implements OnInit {

  incidenciaId: string | null = null;
  detalles: any = null; // Puedes tiparlo mejor si conoces la estructura de los datos

  constructor(
    private route: ActivatedRoute,
    private limpiezaParquesService: LimpiezaParquesService // El servicio para obtener los detalles
  ) {}

  ngOnInit(): void {
    // Obtener el id de la incidencia desde la URL
    this.incidenciaId = this.route.snapshot.paramMap.get('id');
    if (this.incidenciaId) {
      this.cargarDetalles(this.incidenciaId);
    }
  }

  cargarDetalles(id: string): void {
    this.limpiezaParquesService.obtenerIncidenciaPorId(id).subscribe(
      (data: any) => {
        this.detalles = data;
      },
      (error) => {
        console.error('Error al cargar los detalles de la incidencia:', error);
      }
    );
  }
}
