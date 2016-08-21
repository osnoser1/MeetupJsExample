import { Component, Input, OnInit } from '@angular/core';

import { Libro } from '../shared/libro.model';

@Component({
    selector: 'app-libro-detalles',
    templateUrl: 'libro-detalles.component.html',
    styleUrls: ['libro-detalles.component.css']
})
export class LibroDetallesComponent implements OnInit {

    constructor() {}

    @Input() libro: Libro;

    ngOnInit() {
    }

}