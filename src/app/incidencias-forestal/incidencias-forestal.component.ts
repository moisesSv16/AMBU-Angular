import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IncidenciasService } from './incidencias-forestal.service';
import * as es from '../../assets/i18n/Spanish.json';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-incidencias-forestal',
  templateUrl: './incidencias-forestal.component.html',
  styleUrls: ['./incidencias-forestal.component.css']
})
export class IncidenciasForestalComponent implements OnInit {

  private paginaRecargada = false;
  title = 'Forestal';
  registros: any[] = [];
  registrosFiltrados: any[] = [];
  datatable: any;

  // Variables para filtros
  filtroEstado: string = '';
  filtroMunicipio: string = '';
  filtroParque: string = '';

  municipios: string[] = [];
  parques: string[] = [];
  estados: string[] = []; // Array para los estados dinámicos

  @ViewChild('table_forestal', { static: false }) table: ElementRef | undefined;

  constructor(
    private incidenciasService: IncidenciasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerRegistros();
  }

  obtenerRegistros(): void {
    try {
      this.incidenciasService.obtenerRegistros()
        .subscribe(
          (data: any) => {
            console.log('Datos obtenidos desde el servicio:', data);
            this.registros = data.incidencias_forestales || [];
            this.registrosFiltrados = [...this.registros];

            // Poblamos los municipios, parques y estados para los filtros
            this.municipios = [...new Set(this.registros.map(incidencia => incidencia.NombreMunicipio))];
            this.parques = [...new Set(this.registros.map(incidencia => incidencia.NombreParque))];
            this.estados = [...new Set(this.registros.map(incidencia => incidencia.estado))];

            console.log('Estados únicos:', this.estados);
            console.log('Municipios únicos:', this.municipios);
            console.log('Parques únicos:', this.parques);

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

  // Función para aplicar los filtros
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

  // Inicializar el DataTable
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

  navigateToDetails(id: number): void {
    this.router.navigate(['/forestal-datos', id]);
  }

  recargarPagina(): void {
    if (!this.paginaRecargada) {
      this.paginaRecargada = true;
      location.reload();
    }
  }
}
