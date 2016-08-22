import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

    @Output() close = new EventEmitter();
    error: any;
    @Input() libro: Libro;
    navigated = false; // true if navigated here

    goBack(value: Libro = null): void {
        this.close.emit(value);
        if (this.navigated) {
            window.history.back();
        }
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const id = +params['id'];
                this.navigated = true;
                this.libroService.getLibro(id).then(libro => this.libro = libro);
            } else {
                this.navigated = false;
                this.libro = new Libro();
            }
        });
    }

    save(): void {
        this.libroService.save(this.libro)
            .then(libro => {
                this.libro = libro; // saved hero, w/ id if new
                this.goBack(this.libro);
            })
            .catch(error => this.error = error)
    }; // TODO: Display error message

}