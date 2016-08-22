import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LibrosComponent } from './libros/index';
import { LibroDetallesComponent } from './libros/libro-detalles/index';
import { LibroService } from './libros/shared/index';
import { DashboardComponent } from './dashboard/index';
import { LibroBusquedaComponent } from './libros/libro-busqueda/index';

@NgModule({
    declarations: [
        AppComponent,
        LibrosComponent,
        LibroBusquedaComponent,
        LibroDetallesComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
        HttpModule
    ],
    providers: [
        LibroService
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}