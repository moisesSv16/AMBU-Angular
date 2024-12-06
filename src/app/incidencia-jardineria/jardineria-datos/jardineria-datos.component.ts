import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JardineriaService } from '../incidencia-jardineria.service'; 

@Component({
  selector: 'app-jardineria-datos',
  templateUrl: './jardineria-datos.component.html',
  styleUrls: ['./jardineria-datos.component.css']
})
export class JardineriaDatosComponent implements OnInit {

  incidenciaId: string | null = null;
  detalles: any = null; // Puedes tiparlo mejor si conoces la estructura de los datos

  constructor(
    private route: ActivatedRoute,
    private jardineriaService: JardineriaService // El servicio para obtener los detalles
  ) {}

  ngOnInit(): void {
    // Obtener el id de la incidencia desde la URL
    this.incidenciaId = this.route.snapshot.paramMap.get('id');
    if (this.incidenciaId) {
      this.cargarDetalles(this.incidenciaId);
    }
  }

  cargarDetalles(id: string): void {
    this.jardineriaService.obtenerIncidenciaPorId(id).subscribe(
      (data: any) => {
        this.detalles = data;
      },
      (error) => {
        console.error('Error al cargar los detalles de la incidencia:', error);
      }
    );
  }
}
