import { Component, OnInit } from '@angular/core';
import { GraficasService } from './graficas.service';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  totalIncidencias: number = 0;
  dataEstados: any[] = [];
  incidenciasDetalles: any[] = [];
  tipoSeleccionado: string = 'incidencia_faunas';
  filtro: { [estado: string]: string } = {};
  pagina: { [estado: string]: number } = {};

  incidencias = [
    { nombreOriginal: 'incidencia_cinema', nombreFormateado: 'Cinema' },
    { nombreOriginal: 'incidencia_concesionarios', nombreFormateado: 'Concesionarios' },
    { nombreOriginal: 'incidencia_faunas', nombreFormateado: 'Faunas' },
    { nombreOriginal: 'incidencia_jardineria', nombreFormateado: 'Jardinería' },
    { nombreOriginal: 'incidencia_limpieza_parques', nombreFormateado: 'Limpieza Parques' },
    { nombreOriginal: 'incidencia_mantenimiento_forestals', nombreFormateado: 'Mantenimiento Forestal' },
    { nombreOriginal: 'incidencia_mantenimiento_infraestructuras', nombreFormateado: 'Mantenimiento Infraestructuras' },
    { nombreOriginal: 'incidencia_puntos_limpios', nombreFormateado: 'Puntos Limpios' },
    { nombreOriginal: 'incidencia_sanitarios', nombreFormateado: 'Sanitarios' },
    { nombreOriginal: 'incidencia_seguridads', nombreFormateado: 'Seguridad' }
  ];
  chart: any;

  constructor(private graficasService: GraficasService, private router: Router) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.graficasService.getIncidencias(this.tipoSeleccionado).subscribe(data => {
      this.totalIncidencias = data.total;
      this.dataEstados = data.estados;
      this.incidenciasDetalles = data.detalles;

      this.dataEstados.forEach(estado => {
        this.filtro[estado.estado] = '';
        this.pagina[estado.estado] = 1;
      });

      if (this.dataEstados.length > 0) {
        this.crearGrafica();
      }
    }, error => {
      console.error('Error al obtener los datos:', error);
    });
  }

  crearGrafica(): void {
    if (typeof document !== 'undefined') { // Verifica si 'document' está definido (solo en el lado del cliente)
      if (this.chart) {
        this.chart.destroy();
      }
  
      const ctx = document.getElementById('graficaIncidencias') as HTMLCanvasElement;
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.dataEstados.map(estado => estado.estado),
          datasets: [{
            label: `Número de Incidencias ${this.totalIncidencias}`,
            data: this.dataEstados.map(estado => estado.cantidad),
            backgroundColor: ['rgba(255, 255, 0, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(255, 0, 0, 0.6)', 'rgba(0, 128, 0, 0.6)'],
            borderColor: ['rgba(255, 255, 0, 1)', 'rgba(255, 165, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(0, 128, 0, 1)'],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1
              }
            }
          }
        }
      });
    }
  }
  

  getEstadoColor(estado: string): string {
    switch (estado) {
      case 'Abierto': return 'rgba(227, 213, 0)'; // Amarillo
      case 'En proceso': return 'rgba(255, 165, 0, 0.8)'; // Naranja
      case 'Pendiente': return 'rgba(255, 0, 0, 0.8)'; // Rojo
      case 'Cerrado': return 'rgba(0, 128, 0, 0.8)'; // Verde
      default: return 'rgba(128, 128, 128, 0.8)'; // Gris para otros casos
    }
  }

  filtrarIncidenciasPorEstado(estado: string): any[] {
    const filtroTexto = this.filtro[estado] ? this.filtro[estado].toLowerCase() : '';
    return this.incidenciasDetalles.filter(
      detalle => detalle.estado === estado && (
        detalle.folio.toString().includes(filtroTexto) ||
        detalle.municipio.toLowerCase().includes(filtroTexto) ||
        detalle.parque.toLowerCase().includes(filtroTexto)
      )
    );
  }

  navigateToDetails(id: number): void {
    let routePath: string;

    switch (this.tipoSeleccionado) {
      case 'incidencia_cinema':
        routePath = '/cinema-datos';
        break;
      case 'incidencia_concesionarios':
        routePath = '/concesionarios-datos';
        break;
      case 'incidencia_faunas':
        routePath = '/detalles-incidencia';
        break;
      case 'incidencia_jardineria':
        routePath = '/jardineria-datos';
        break;
      case 'incidencia_limpieza_parques':
        routePath = '/limpieza-parques-datos';
        break;
      case 'incidencia_mantenimiento_forestals':
        routePath = '/forestal-datos';
        break;
      case 'incidencia_mantenimiento_infraestructuras':
        routePath = '/mantenimiento-datos';
        break;
      case 'incidencia_puntos_limpios':
        routePath = '/puntos-limpios-datos';
        break;
      case 'incidencia_sanitarios':
        routePath = '/sanitarias-datos';
        break;
      case 'incidencia_seguridads':
        routePath = '/seguridad-datos';
        break;
      default:
        console.error('Ruta no definida para el tipo de incidencia:', this.tipoSeleccionado);
        return;
    }

    this.router.navigate([routePath, id]);
  }
}
