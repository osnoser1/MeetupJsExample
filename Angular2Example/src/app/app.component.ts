import { Component } from '@angular/core';

export class Libro {
    idLibro: number;
    titulo: string;
}

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'la aplicacion trabaja!';
    libro: Libro = {
        idLibro: 1,
        titulo: "Introduccion a Javascript",
    };
}