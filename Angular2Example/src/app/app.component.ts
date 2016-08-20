import { Component } from '@angular/core';

export class Libro {
    idLibro: number;
    titulo: string;
}

const LIBROS: Libro[] = [
    { idLibro: 11, titulo: 'Pride and Prejudic' },
    { idLibro: 12, titulo: 'Northanger Abbey' },
    { idLibro: 13, titulo: 'David Copperfield' },
    { idLibro: 14, titulo: 'Don Quixote' }
];

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'la aplicacion trabaja!';
    libros = LIBROS;
    libroSeleccionado: Libro;

    onSelect(libro: Libro): void {
        this.libroSeleccionado = libro;
    }

}