import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidenciasService } from '../incidencias-forestal.service';

@Component({
  selector: 'app-forestal-datos',
  templateUrl: './forestal-datos.component.html',
  styleUrls: ['./forestal-datos.component.css']
})
export class ForestalDatosComponent implements OnInit {

  incidencia: any;  // Variable para almacenar los detalles de la incidencia

  constructor(
    private route: ActivatedRoute,  // Para obtener el ID de la URL
    private incidenciasService: IncidenciasService  // Servicio para obtener los datos
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  // Obtener el ID de la URL
    if (id) {
      this.obtenerIncidenciaPorId(+id);  // Llamar al método para obtener la incidencia
    }
  }

  obtenerIncidenciaPorId(id: number): void {
    this.incidenciasService.obtenerRegistroPorId(id)
      .subscribe((data: any) => {
        this.incidencia = data;  // Asignar los datos obtenidos a la variable
        console.log('Detalles de la incidencia:', this.incidencia);  // Verificar en la consola
      });
  }
}
