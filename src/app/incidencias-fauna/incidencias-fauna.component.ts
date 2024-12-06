import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IncidenciasService } from './incidencias-fauna.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as es from '../../assets/i18n/Spanish.json'; // Ajusta la ruta según tu configuración
import { SharedDataService } from './shared-data-fauna.service';
declare var $: any;

@Component({
  selector: 'app-incidencias-fauna',
  templateUrl: './incidencias-fauna.component.html',
  styleUrls: ['./incidencias-fauna.component.css']
})
export class IncidenciasFaunaComponent implements OnInit {
  title = 'Fauna';
  registros: any[] = []; // Array original con todos los registros
  registrosFiltrados: any[] = []; // Array para los registros filtrados
  datatable: any;
  id: string | null = null; // Variable para guardar el ID de la incidencia

  // Variables para filtros
  filtroEstado: string = ''; // Filtro de estado
  filtroMunicipio: string = ''; // Filtro de municipio
  filtroParque: string = ''; // Filtro de parque

  municipios: string[] = [];
  parques: string[] = [];
  estados: string[] = []; // Array para los estados dinámicos

  @ViewChild('table_fauna', { static: false }) table: ElementRef | undefined;

  constructor(
    private incidenciasService: IncidenciasService,
    private sharedDataService: SharedDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.obtenerRegistros(); // Cargar los registros al iniciar el componente
  }

  obtenerRegistros(): void {
    this.incidenciasService.obtenerRegistros().subscribe(
      (data: any) => {
        this.registros = data.incidencias || []; // Guardar los registros originales
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

    // Aplicar filtro de estado si está seleccionado y no es "Todos"
    if (this.filtroEstado && this.filtroEstado !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.estado === this.filtroEstado);
    }

    // Aplicar filtro de municipio si está seleccionado y no es "Todos"
    if (this.filtroMunicipio && this.filtroMunicipio !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.NombreMunicipio === this.filtroMunicipio);
    }

    // Aplicar filtro de parque si está seleccionado y no es "Todos"
    if (this.filtroParque && this.filtroParque !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.NombreParque === this.filtroParque);
    }

    // Actualizamos el array filtrado
    this.registrosFiltrados = registrosTemp;

    // Reiniciar la tabla con los nuevos datos filtrados
    this.reiniciarTabla();
  }

  // Método para reiniciar la tabla
  reiniciarTabla(): void {
    if (this.datatable) {
      this.datatable.clear();
      this.datatable.destroy(); // Destruir la tabla existente antes de volver a inicializarla
    }

    this.initDataTable(); // Inicializar la tabla de nuevo con los registros filtrados
  }

  initDataTable(): void {
    $(document).ready(() => {
      if (this.table && this.table.nativeElement) {
        this.datatable = $(this.table.nativeElement).DataTable({
          data: this.registrosFiltrados, // Cargar los datos filtrados
          columns: [
            { title: "Folio", data: "folio" },
            { title: "Municipio", data: "NombreMunicipio" },
            { title: "Parque", data: "NombreParque" },
            { title: "Ubicación", data: "ubicacion" },
            { title: "Estatus", data: "estado" },
            {
              title: "Fecha de creación",
              data: "created_at",
              render: (data: any, type: any, row: any) => {
                return data ? new Date(data).toLocaleDateString('es-ES') : 'No disponible';
              }
            },
            {
              title: "Detalles",
              data: null, // Definir como null para manejarlo manualmente
              render: (data: any, type: any, row: any) => {
                return `
                <a class="btn btn-primary btn-sm ver-detalles" data-id="${row.id}" title="Ver Detalles" 
                   style="background-color: #198653; border-color: #198653; color: white;">
                  <i class="bi bi-eye"></i> Ver
                </a>`;
              }
            }
          ],
          language: es, // Aplicar las traducciones
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

  navigateToDetails(id: string): void {
    this.router.navigate(['/detalles-incidencia', id]);
  }
}
