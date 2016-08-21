import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LibroService } from '../libros/shared/libro.service';
import { Libro } from '../libros/shared/libro.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private router: Router, private libroService: LibroService) {}

    libros: Libro[];

    gotoDetail(libro: Libro): void {
        let link = ['/libros', libro.idLibro];
        this.router.navigate(link);
    }

    ngOnInit() {
        this.libroService.getLibros().then(libros => this.libros = libros.slice(1, 5));
    }

}