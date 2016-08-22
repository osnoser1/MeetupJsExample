import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Libro, LibroService } from '../shared/index';

@Component({
    selector: 'app-libro-busqueda',
    templateUrl: 'libro-busqueda.component.html',
    styleUrls: ['libro-busqueda.component.css']
})
export class LibroBusquedaComponent implements OnInit {

    constructor(private libroService: LibroService, private router: Router) {}

    libros: Observable<Libro[]>;

    private searchTerms = new Subject<string>();

    gotoDetail(libro: Libro): void {
        this.router.navigate(['/libros', libro.idLibro]);
    }

    ngOnInit(): void {
        this.libros = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.libroService.search(term)
                // or the observable of empty libros if no search term
                : Observable.of<Libro[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Libro[]>([]);
            });
    }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

}