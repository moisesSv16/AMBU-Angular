import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ConsultasComponent } from './consultas/consultas.component';

import { IncidenciasMantenimientoComponent } from './incidencias-mantenimiento/incidencias-mantenimiento.component';
import { IncidenciasFaunaComponent } from './incidencias-fauna/incidencias-fauna.component';
import { IncidenciasSanitoriosComponent } from './incidencias-sanitorios/incidencias-sanitorios.component';
import { IncidenciasForestalComponent } from './incidencias-forestal/incidencias-forestal.component';
import { IncidenciaCinemaComponent } from './incidencia-cinema/incidencia-cinema.component';
import { IncidenciaConcesionariosComponent } from './incidencia-concesionarios/incidencia-concesionarios.component';
import { IncidenciaJardineriaComponent } from './incidencia-jardineria/incidencia-jardineria.component';
import { IncidenciaLimpiezaParquesComponent } from './incidencia-limpieza-parques/incidencia-limpieza-parques.component';
import { IncidenciaPuntosLimpiosComponent } from './incidencia-puntos-limpios/incidencia-puntos-limpios.component';
import { IncidenciaSeguridadComponent } from './incidencia-seguridad/incidencia-seguridad.component';
import{GraficasComponent}from'./graficas/graficas.component';


import { IndicacionesComponent } from './indicaciones/indicaciones.component';
import { AutorizacionesComponent } from './autorizaciones/autorizaciones.component';
import { AutorizacionDetallesComponent } from './autorizacion-detalles/autorizacion-detalles.component';

import { FaunaDatosComponent } from './incidencias-fauna/fauna-datos/fauna-datos.component';
import { SanitariasDatosComponent } from './incidencias-sanitorios/sanitarias-datos/sanitarias-datos.component'; 
import { MantenimientoDatosComponent } from './incidencias-mantenimiento/mantenimiento-datos/mantenimiento-datos.component';
import {ForestalDatosComponent}from './incidencias-forestal/forestal-datos/forestal-datos.component';
import { CinemaDatosComponent } from './incidencia-cinema/cinema-datos/cinema-datos.component';
import { ConcesionariosDatosComponent } from './incidencia-concesionarios/concesionarios-datos/concesionarios-datos.component';
import { JardineriaDatosComponent } from './incidencia-jardineria/jardineria-datos/jardineria-datos.component';
import { LimpiezaParquesDatosComponent } from './incidencia-limpieza-parques/limpieza-parques-datos/limpieza-parques-datos.component';
import { PuntosLimpiosDatosComponent } from './incidencia-puntos-limpios/puntos-limpios-datos/puntos-limpios-datos.component';
import { SeguridadDatosComponent } from './incidencia-seguridad/seguridad-datos/seguridad-datos.component';





const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'inicio_sesion', component: InicioSesionComponent },
  { path: 'consulta', component: ConsultasComponent },
  
  // Incidencias
  { path: 'incidencias_mantenimiento', component: IncidenciasMantenimientoComponent },
  { path: 'incidencias_fauna', component: IncidenciasFaunaComponent },
  { path: 'incidencias_sanitarios', component: IncidenciasSanitoriosComponent },
  { path: 'incidencias_forestal', component: IncidenciasForestalComponent },
  { path: 'incidencias_cinema', component: IncidenciaCinemaComponent },
  { path: 'incidencias_concesionarios', component: IncidenciaConcesionariosComponent },
  { path: 'incidencias_jardineria', component: IncidenciaJardineriaComponent },
  { path: 'incidencias_limpieza_parques', component: IncidenciaLimpiezaParquesComponent },
  { path: 'incidencias_puntos_limpios', component: IncidenciaPuntosLimpiosComponent },
  { path: 'incidencias_seguridad', component: IncidenciaSeguridadComponent },
  {path:'graficas',component: GraficasComponent},
  

  // Otras rutas
  { path: 'autorizaciones', component: AutorizacionesComponent },
  { path: 'indicaciones', component: IndicacionesComponent },
  { path: 'autorizacion_detalles', component: AutorizacionDetallesComponent },
  { path: 'incidencias-forestal', component: IncidenciasForestalComponent },  // Ruta para mostrar todas las incidencias

  // Detalles de incidencias
  { path: 'detalles-incidencia/:id', component: FaunaDatosComponent },
  { path: 'sanitarias-datos/:id', component: SanitariasDatosComponent }, 
  { path: 'mantenimiento-datos/:id', component: MantenimientoDatosComponent },  // 
  { path: 'forestal-datos/:id', component: ForestalDatosComponent },
  { path: 'cinema-datos/:id', component: CinemaDatosComponent },
  { path: 'concesionarios-datos/:id', component: ConcesionariosDatosComponent },
  { path: 'jardineria-datos/:id', component: JardineriaDatosComponent },
    // Ruta para los detalles de una incidencia de limpieza en parques, con el parámetro 'id'
  { path: 'limpieza-parques-datos/:id', component: LimpiezaParquesDatosComponent },
      // Ruta para los detalles de una incidencia de puntos limpios, con el parámetro 'id'
  { path: 'puntos-limpios-datos/:id', component: PuntosLimpiosDatosComponent },
  // Ruta para los detalles de una incidencia de seguridad, con el parámetro 'id'
  { path: 'seguridad-datos/:id', component: SeguridadDatosComponent },
  

  
  
  // Redirecciones
  { path: '', redirectTo: '/incidencias-fauna', pathMatch: 'full' },

  // Ruta wildcard (cualquier ruta no encontrada)
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
