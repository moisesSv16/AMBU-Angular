import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CinemaService } from './incidencia-cinema.service';
import * as es from '../../assets/i18n/Spanish.json'; // Para las traducciones de DataTables
import { Router } from '@angular/router';
declare var $: any; // jQuery para manejar DataTables

@Component({
  selector: 'app-incidencia-cinema',
  templateUrl: './incidencia-cinema.component.html',
  styleUrls: ['./incidencia-cinema.component.css']
})
export class IncidenciaCinemaComponent implements OnInit {

  registros: any[] = [];  // Aquí se almacenarán los datos obtenidos del servicio
  registrosFiltrados: any[] = []; // Registros después de aplicar los filtros
  datatable: any; // Para manejar la instancia de DataTables

  // Variables para los filtros
  filtroEstado: string = ''; // Filtro de estado
  filtroMunicipio: string = ''; // Filtro de municipio
  filtroParque: string = ''; // Filtro de parque

  municipios: string[] = [];
  parques: string[] = [];
  estados: string[] = []; // Lista para almacenar los estados únicos

  @ViewChild('table_cinema', { static: false }) table: ElementRef | undefined;

  constructor(private cinemaService: CinemaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerRegistros();
  }

  // Método para obtener los registros de cine con relaciones
  obtenerRegistros(): void {
    this.cinemaService.obtenerRegistros().subscribe(
      (data: any) => {
        this.registros = data.incidencias || [];  // Ajusta 'incidencias' si el nombre de la respuesta es diferente
        this.registrosFiltrados = [...this.registros]; // Inicialmente todos los registros

        // Poblamos los municipios y parques para los filtros
        this.municipios = [...new Set(this.registros.map(incidencia => incidencia.NombreMunicipio))];
        this.parques = [...new Set(this.registros.map(incidencia => incidencia.NombreParque))];

        // Poblamos los estados únicos para el filtro
        this.estados = [...new Set(this.registros.map(incidencia => incidencia.estado))];

        if (this.datatable) {
          this.datatable.destroy(); // Destruir el DataTable si ya está inicializado
        }

        this.initDataTable(); // Inicializar DataTable con los nuevos datos
      },
      error => {
        console.error('Error al obtener los registros:', error);
      }
    );
  }

  // Método para aplicar los filtros
  applyFilters(): void {
    let registrosTemp = [...this.registros]; // Reiniciar el array filtrado

    // Aplicar filtro de estado si está seleccionado y no es vacío
    if (this.filtroEstado && this.filtroEstado !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.estado.toLowerCase() === this.filtroEstado.toLowerCase());
    }

    // Aplicar filtro de municipio si está seleccionado y no es vacío
    if (this.filtroMunicipio && this.filtroMunicipio !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.NombreMunicipio === this.filtroMunicipio);
    }

    // Aplicar filtro de parque si está seleccionado y no es vacío
    if (this.filtroParque && this.filtroParque !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.NombreParque === this.filtroParque);
    }

    this.registrosFiltrados = registrosTemp; // Actualizamos el array filtrado
    this.reiniciarTabla(); // Reiniciar la tabla con los nuevos datos filtrados
  }

  // Método para reiniciar la tabla
  reiniciarTabla(): void {
    if (this.datatable) {
      this.datatable.clear();
      this.datatable.destroy(); // Destruir la tabla existente antes de volver a inicializarla
    }

    this.initDataTable(); // Inicializar la tabla de nuevo con los registros filtrados
  }

  // Método para inicializar DataTables
  initDataTable(): void {
    $(document).ready(() => {
      if (this.table && this.table.nativeElement) {
        this.datatable = $(this.table.nativeElement).DataTable({
          data: this.registrosFiltrados, // Cargar los datos filtrados
          columns: [
            { title: "Folio", data: "folio" },
            { title: "Municipio", data: "NombreMunicipio" },
            { title: "Parque", data: "NombreParque" },
            { title: "Estatus", data: "estado" },
            {
              title: "Fecha del reporte",
              data: "created_at",
              render: (data: any, type: any, row: any) => {
                return data ? new Date(data).toLocaleDateString('es-ES') : 'No disponible';
              }
            },
            {
              title: "Detalles",
              data: null,
              render: (data: any, type: any, row: any) => {
                return `
                <a class="btn btn-primary btn-sm ver-detalles" data-id="${row.id}" title="Ver Detalles" 
                   style="background-color: #198653; border-color: #198653; color: white;">
                  <i class="bi bi-eye"></i> Ver
                </a>`;
              }
            }
          ],
          language: es, // Aplicar las traducciones en español
          drawCallback: () => {
            $('.ver-detalles').on('click', (event: any) => {
              const id = $(event.currentTarget).data('id');
              this.navigateToDetails(id);
            });
          }
        });
      }
    });
  }

  // Método para navegar a los detalles de una incidencia
  navigateToDetails(id: number): void {
    this.router.navigate(['/cinema-datos', id]); // Cambia la ruta según sea necesario
  }
}
