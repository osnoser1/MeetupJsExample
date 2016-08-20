import { Injectable } from '@angular/core';
import { Libro } from './models/libro';
import { LIBROS } from './mock-libros';

@Injectable()
export class LibroService {

    constructor() {}

    getLibros(): Promise<Libro[]>{
        return Promise.resolve(LIBROS);;
    }

    getLibrossSlowly(): Promise<Libro[]> {
        return new Promise<Libro[]>(resolve =>
            setTimeout(() => resolve(LIBROS), 3000) // 2 seconds
        );
    }

}