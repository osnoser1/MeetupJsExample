import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../models/libro';

@Component({
    selector: 'mi-libro-detalles',
    templateUrl: 'libro-detalles.component.html',
    styleUrls: ['libro-detalles.component.css']
})
export class LibroDetallesComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }

    @Input()
    libro: Libro;

}