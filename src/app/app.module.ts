import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Importa HttpClientModule
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';




import { ConsultasComponent } from './consultas/consultas.component';
import { IndicacionesComponent } from './indicaciones/indicaciones.component';
import { AutorizacionesComponent } from './autorizaciones/autorizaciones.component';
import { AutorizacionDetallesComponent } from './autorizacion-detalles/autorizacion-detalles.component';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { IncidenciasMantenimientoComponent } from './incidencias-mantenimiento/incidencias-mantenimiento.component';

import { IncidenciasFaunaComponent } from './incidencias-fauna/incidencias-fauna.component';
import { IncidenciasSanitoriosComponent } from './incidencias-sanitorios/incidencias-sanitorios.component';
import { IncidenciasForestalComponent } from './incidencias-forestal/incidencias-forestal.component';

import { FaunaDatosComponent } from './incidencias-fauna/fauna-datos/fauna-datos.component';
import { MantenimientoDatosComponent } from './incidencias-mantenimiento/mantenimiento-datos/mantenimiento-datos.component';
import { ForestalDatosComponent } from './incidencias-forestal/forestal-datos/forestal-datos.component';
import { IncidenciaCinemaComponent } from './incidencia-cinema/incidencia-cinema.component';
import { IncidenciaConcesionariosComponent } from './incidencia-concesionarios/incidencia-concesionarios.component';
import { IncidenciaJardineriaComponent } from './incidencia-jardineria/incidencia-jardineria.component';
import { IncidenciaLimpiezaParquesComponent } from './incidencia-limpieza-parques/incidencia-limpieza-parques.component';
import { IncidenciaPuntosLimpiosComponent } from './incidencia-puntos-limpios/incidencia-puntos-limpios.component';
import { IncidenciaSeguridadComponent } from './incidencia-seguridad/incidencia-seguridad.component';
import { CinemaDatosComponent } from './incidencia-cinema/cinema-datos/cinema-datos.component';
import { ConcesionariosDatosComponent } from './incidencia-concesionarios/concesionarios-datos/concesionarios-datos.component';
import { JardineriaDatosComponent } from './incidencia-jardineria/jardineria-datos/jardineria-datos.component';
import { LimpiezaParquesDatosComponent } from './incidencia-limpieza-parques/limpieza-parques-datos/limpieza-parques-datos.component';
import { PuntosLimpiosDatosComponent } from './incidencia-puntos-limpios/puntos-limpios-datos/puntos-limpios-datos.component';
import { SeguridadDatosComponent } from './incidencia-seguridad/seguridad-datos/seguridad-datos.component';
import { GraficasComponent } from './graficas/graficas.component'; // Ajusta la ruta según tu estructura


@NgModule({ declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        FooterComponent,
        InicioSesionComponent,
        ConsultasComponent,
        IndicacionesComponent,
        AutorizacionesComponent,
        AutorizacionDetallesComponent,
        IncidenciasMantenimientoComponent,
        IncidenciasFaunaComponent,
        IncidenciasSanitoriosComponent,
        IncidenciasForestalComponent,
        IncidenciaCinemaComponent,
        IncidenciaConcesionariosComponent,
        IncidenciaJardineriaComponent,
        IncidenciaLimpiezaParquesComponent,
        IncidenciaPuntosLimpiosComponent,
        IncidenciaSeguridadComponent,
        FaunaDatosComponent,
        MantenimientoDatosComponent,
        ForestalDatosComponent,
        CinemaDatosComponent,
        ConcesionariosDatosComponent,
        JardineriaDatosComponent,
        LimpiezaParquesDatosComponent,
        PuntosLimpiosDatosComponent,
        SeguridadDatosComponent,
        GraficasComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,NgxPaginationModule,
        AppRoutingModule,
        CommonModule,
        FormsModule], providers: [
        provideClientHydration(),
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        //provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
