import { Component } from '@angular/core';
import { Libro } from './models/libro';
import { LibroService } from './libro.service'

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [LibroService]
})
export class AppComponent {

    constructor(private libroService: LibroService) {}

    title = 'la aplicacion trabaja!';
    libros: Libro[];
    libroSeleccionado: Libro;

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