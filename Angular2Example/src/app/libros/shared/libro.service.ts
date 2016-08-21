import { Injectable } from "@angular/core";
import { Libro } from "./libro.model";
import { libros } from "./mock-libros";

@Injectable()
export class LibroService {

    constructor() {}

    getLibros(): Promise<Libro[]>{
        return Promise.resolve(libros);;
    }

    getLibrossSlowly(): Promise<Libro[]> {
        return new Promise<Libro[]>(resolve =>
            setTimeout(() => resolve(libros), 3000) // 2 seconds
        );
    }

    getLibro(id: number): Promise<Libro> {
        return this.getLibros().then(libros => libros.find(libro => libro.idLibro === id));
    }
}