import { Component } from '@angular/core';

import { Libro } from "./libros/shared/libro.model";
import { LibroService } from "./libros/shared/libro.service"

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [LibroService]
})
export class AppComponent {

    constructor(private libroService: LibroService) {}

    libros: Libro[];
    libroSeleccionado: Libro;
    title = 'la aplicacion trabaja!';

    getLibros(): void {
        this.libroService.getLibros().then(libros => this.libros = libros);
    }

    ngOnInit(): void {
        this.getLibros();
    }

    onSelect(libro: Libro): void {
        this.libroSeleccionado = libro;
    }

}