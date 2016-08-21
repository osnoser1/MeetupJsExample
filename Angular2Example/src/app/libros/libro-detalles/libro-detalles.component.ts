import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Libro } from '../shared/libro.model';
import { LibroService } from '../shared/libro.service';

@Component({
    selector: 'app-libro-detalles',
    templateUrl: 'libro-detalles.component.html',
    styleUrls: ['libro-detalles.component.css']
})
export class LibroDetallesComponent implements OnInit {

    constructor(private libroService: LibroService, private route: ActivatedRoute) {}

    @Input() libro: Libro;

    goBack(): void {
        window.history.back();
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            const id = +params['id'];
            this.libroService.getLibro(id).then(libro => this.libro = libro);
        });
    }

}