import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Libro } from "./shared/libro.model";
import { LibroService } from "./shared/libro.service"

@Component({
    selector: 'app-libros',
    templateUrl: 'libros.component.html',
    styleUrls: ['libros.component.css']
})
export class LibrosComponent implements OnInit {

    constructor(private router: Router, private libroService: LibroService) {}

    libros: Libro[];
    libroSeleccionado: Libro;

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