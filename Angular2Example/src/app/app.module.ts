import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LibroDetallesComponent } from './libros/libro-detalles/libro-detalles.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroService } from './libros/shared/libro.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        LibrosComponent,
        LibroDetallesComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing
    ],
    providers: [
        LibroService
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}