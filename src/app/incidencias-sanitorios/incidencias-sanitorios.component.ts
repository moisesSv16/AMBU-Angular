import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IncidenciasService } from './incidencias-sanitarios.service';
import * as es from '../../assets/i18n/Spanish.json'; // Ajusta la ruta según tu configuración
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-incidencias-sanitorios',
  templateUrl: './incidencias-sanitorios.component.html',
  styleUrls: ['./incidencias-sanitorios.component.css']
})
export class IncidenciasSanitoriosComponent implements OnInit {
  registros: any[] = []; // Array original con todos los registros
  registrosFiltrados: any[] = []; // Array para los registros filtrados
  datatable: any;

  // Variables para los filtros
  filtroEstado: string = ''; // Filtro de estado
  filtroMunicipio: string = ''; // Filtro de municipio
  filtroParque: string = ''; // Filtro de parque

  municipios: string[] = [];
  parques: string[] = [];
  estados: string[] = []; // Array dinámico para los estados

  @ViewChild('table_sanitarios', { static: false }) table: ElementRef | undefined;

  constructor(
    private incidenciasService: IncidenciasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerRegistros(); // Cargar los registros al iniciar el componente
  }

  obtenerRegistros(): void {
    this.incidenciasService.obtenerRegistros().subscribe(
      (data: any) => {
        this.registros = data.incidencias || [];
        this.registrosFiltrados = [...this.registros]; // Inicialmente todos los registros

        // Poblamos los municipios, parques y estados para los filtros
        this.municipios = [...new Set(this.registros.map(incidencia => incidencia.NombreMunicipio))];
        this.parques = [...new Set(this.registros.map(incidencia => incidencia.NombreParque))];
        this.estados = [...new Set(this.registros.map(incidencia => incidencia.estado))];

        console.log('Estados únicos:', this.estados);
        console.log('Municipios únicos:', this.municipios);
        console.log('Parques únicos:', this.parques);

        this.initDataTable(); // Inicializar la tabla con los registros
      },
      error => {
        console.error('Error al obtener registros:', error);
      }
    );
  }

  // Método para aplicar los filtros
  applyFilters(): void {
    let registrosTemp = [...this.registros]; // Reiniciar el array filtrado

    // Filtrar por estado
    if (this.filtroEstado && this.filtroEstado !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.estado === this.filtroEstado);
    }

    // Filtrar por municipio
    if (this.filtroMunicipio && this.filtroMunicipio !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.NombreMunicipio === this.filtroMunicipio);
    }

    // Filtrar por parque
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

  // Inicializar DataTable con los registros filtrados
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
          language: es,
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

  // Función para navegar al componente de detalles
  navigateToDetails(id: string): void {
    this.router.navigate(['/sanitarias-datos', id]); // Navega a la ruta con el ID
  }
}
