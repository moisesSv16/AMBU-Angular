import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConcesionariosService } from '../incidencia-concesionarios.service'; 

@Component({
  selector: 'app-concesionarios-datos',
  templateUrl: './concesionarios-datos.component.html',
  styleUrls: ['./concesionarios-datos.component.css']
})
export class ConcesionariosDatosComponent implements OnInit {

  incidenciaId: string | null = null;
  detalles: any = null; // Puedes tiparlo mejor si conoces la estructura de los datos

  constructor(
    private route: ActivatedRoute,
    private concesionariosService: ConcesionariosService // El servicio para obtener los detalles
  ) {}

  ngOnInit(): void {
    // Obtener el id de la incidencia desde la URL
    this.incidenciaId = this.route.snapshot.paramMap.get('id');
    if (this.incidenciaId) {
      this.cargarDetalles(this.incidenciaId);
    }
  }

  cargarDetalles(id: string): void {
    this.concesionariosService.obtenerIncidenciaPorId(id).subscribe(
      (data: any) => {
        this.detalles = data;
      },
      (error) => {
        console.error('Error al cargar los detalles de la incidencia:', error);
      }
    );
  }
}
