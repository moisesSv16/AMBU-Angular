import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JardineriaService } from './incidencia-jardineria.service';
import * as es from '../../assets/i18n/Spanish.json';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-incidencia-jardineria',
  templateUrl: './incidencia-jardineria.component.html',
  styleUrls: ['./incidencia-jardineria.component.css']
})
export class IncidenciaJardineriaComponent implements OnInit {
  private paginaRecargada = false;
  title = 'Jardinería';
  registros: any[] = [];
  registrosFiltrados: any[] = [];
  datatable: any;

  // Variables para filtros
  filtroEstado: string = '';
  filtroMunicipio: string = '';
  filtroParque: string = '';

  municipios: string[] = [];
  parques: string[] = [];
  estados: string[] = [];

  @ViewChild('table_jardineria', { static: false }) table: ElementRef | undefined;

  constructor(
    private jardineriaService: JardineriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerRegistros();
  }

  obtenerRegistros(): void {
    try {
      this.jardineriaService.obtenerRegistros()
        .subscribe(
          (data: any) => {
            this.registros = data.incidencias || [];
            this.registrosFiltrados = [...this.registros];

            // Poblamos los municipios, parques y estados para los filtros
            this.municipios = [...new Set(this.registros.map(incidencia => incidencia.NombreMunicipio))];
            this.parques = [...new Set(this.registros.map(incidencia => incidencia.NombreParque))];
            this.estados = [...new Set(this.registros.map(incidencia => incidencia.estado))];

            // Verificar los datos en consola
            console.log('Estados únicos obtenidos:', this.estados);
            console.log('Municipios únicos obtenidos:', this.municipios);
            console.log('Parques únicos obtenidos:', this.parques);

            if (this.datatable) {
              this.datatable.destroy();
            }

            this.initDataTable();

            if (this.registros.length === 0) {
              console.warn('Datos vacíos');
            }
          },
          error => {
            console.error('Error al obtener registros:', error);
          }
        );
    } catch (error) {
      console.error('Error inesperado:', error);
    }
  }

  // Método para aplicar los filtros
  applyFilters(): void {
    let registrosTemp = [...this.registros];

    // Filtrar por estado si está seleccionado
    if (this.filtroEstado && this.filtroEstado !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.estado === this.filtroEstado);
    }

    // Filtrar por municipio si está seleccionado
    if (this.filtroMunicipio && this.filtroMunicipio !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.NombreMunicipio === this.filtroMunicipio);
    }

    // Filtrar por parque si está seleccionado
    if (this.filtroParque && this.filtroParque !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.NombreParque === this.filtroParque);
    }

    this.registrosFiltrados = registrosTemp;
    this.reiniciarTabla();
  }

  // Método para reiniciar la tabla
  reiniciarTabla(): void {
    if (this.datatable) {
      this.datatable.clear();
      this.datatable.destroy();
    }

    this.initDataTable();
  }

  // Método para inicializar DataTables
  initDataTable(): void {
    $(document).ready(() => {
      if (this.table && this.table.nativeElement) {
        this.datatable = $(this.table.nativeElement).DataTable({
          data: this.registrosFiltrados,
          columns: [
            {
              title: "Folio",
              data: "folio",
              render: (data: any) => data || 'No disponible'
            },
            {
              title: "Municipio",
              data: "NombreMunicipio",
              render: (data: any) => data || 'No disponible'
            },
            {
              title: "Parque",
              data: "NombreParque",
              render: (data: any) => data || 'No disponible'
            },
            {
              title: "Estatus",
              data: "estado",
              render: (data: any) => data || 'No disponible'
            },
            {
              title: "Fecha del Reporte",
              data: "created_at",
              render: (data: any) => data ? new Date(data).toLocaleDateString('es-ES') : 'No disponible'
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

  navigateToDetails(id: number) {
    this.router.navigate(['/jardineria-datos', id]);
  }
}
