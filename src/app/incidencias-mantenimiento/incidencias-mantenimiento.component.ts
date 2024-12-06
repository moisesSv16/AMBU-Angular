import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IncidenciasService } from './incidencias-mantenimiento.service';
import { Router } from '@angular/router';
import * as es from '../../assets/i18n/Spanish.json'; // Ruta del archivo de traducción
declare var $: any;

@Component({
  selector: 'app-incidencias-mantenimiento',
  templateUrl: './incidencias-mantenimiento.component.html',
  styleUrls: ['./incidencias-mantenimiento.component.css']
})
export class IncidenciasMantenimientoComponent implements OnInit {
  registros: any[] = []; // Array original con todos los registros
  registrosFiltrados: any[] = []; // Array para los registros filtrados
  datatable: any;

  // Variables para los filtros
  filtroEstado: string = '';
  filtroMunicipio: string = '';
  filtroParque: string = '';

  municipios: string[] = [];
  parques: string[] = [];
  estados: string[] = []; // Array para los estados dinámicos

  @ViewChild('table_mantenimiento', { static: false }) table: ElementRef | undefined;

  constructor(
    private incidenciasService: IncidenciasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerRegistros();
  }

  obtenerRegistros(): void {
    this.incidenciasService.obtenerRegistros().subscribe(
      (data: any) => {
        this.registros = data.incidencias || [];
        this.registrosFiltrados = [...this.registros];

        // Poblamos los municipios, parques y estados para los filtros
        this.municipios = [...new Set(this.registros.map(incidencia => incidencia.NombreMunicipio))];
        this.parques = [...new Set(this.registros.map(incidencia => incidencia.NombreParque))];
        this.estados = [...new Set(this.registros.map(incidencia => incidencia.estado))];

        console.log('Estados únicos:', this.estados);
        console.log('Municipios únicos:', this.municipios);
        console.log('Parques únicos:', this.parques);

        this.initDataTable();
      },
      error => {
        console.error('Error al obtener registros:', error);
      }
    );
  }

  // Método para aplicar los filtros
  applyFilters(): void {
    let registrosTemp = [...this.registros];

    // Aplicar filtro de estado
    if (this.filtroEstado && this.filtroEstado !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.estado === this.filtroEstado);
    }

    // Aplicar filtro de municipio
    if (this.filtroMunicipio && this.filtroMunicipio !== '') {
      registrosTemp = registrosTemp.filter(incidencia => incidencia.NombreMunicipio === this.filtroMunicipio);
    }

    // Aplicar filtro de parque
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

  // Inicializar DataTable con los registros filtrados
  initDataTable(): void {
    $(document).ready(() => {
      if (this.table && this.table.nativeElement) {
        this.datatable = $(this.table.nativeElement).DataTable({
          data: this.registrosFiltrados,
          columns: [
            { title: "Folio", data: "folio" },
            { title: "Municipio", data: "NombreMunicipio" },
            { title: "Parque", data: "NombreParque" },
            { title: "Estatus", data: "estado" },
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

  navigateToDetails(id: number): void {
    this.router.navigate(['/mantenimiento-datos', id]);
  }
}
