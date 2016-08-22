import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Libro, LibroService } from './shared/index';

@Component({
    selector: 'app-libros',
    templateUrl: 'libros.component.html',
    styleUrls: ['libros.component.css']
})
export class LibrosComponent implements OnInit {

    constructor(private router: Router, private libroService: LibroService) {}

    agregandoLibro = false;
    error: any;
    libros: Libro[];
    libroSeleccionado: Libro;

    agregarLibro(): void {
        this.agregandoLibro = true;
        this.libroSeleccionado = null;
    }

    deleteLibro(libro: Libro, event: any): void {
        event.stopPropagation();
        this.libroService
            .delete(libro)
            .then(res => {
                this.libros = this.libros.filter(h => h !== libro);
                if (this.libroSeleccionado === libro) { this.libroSeleccionado = null; }
            })
            .catch(error => this.error = error);
    }

    close(savedLibro: Libro): void {
        this.agregandoLibro = false;
        if (savedLibro) { this.getLibros(); }
    }

    getLibros(): void {
        this.libroService.getLibros().then(libros => this.libros = libros);
    }

    gotoDetail(): void {
        this.router.navigate(['/libros', this.libroSeleccionado.idLibro]);
    }

    ngOnInit(): void {
        this.getLibros();
    }

    onSelect(libro: Libro): void {
        this.libroSeleccionado = libro;
    }

}