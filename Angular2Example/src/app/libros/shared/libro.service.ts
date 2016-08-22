import { Injectable } from "@angular/core";
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Libro } from "./index";

@Injectable()
export class LibroService {

    constructor(private http: Http) {}

    private librosUrl = 'http://localhost:45886/api/libros'; // URL to web api

    delete(libro: Libro): Promise<Response> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const url = `${this.librosUrl}/${libro.idLibro}`;

        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    getLibros = (): Promise<Libro[]> => this.http.get(this.librosUrl)
        .toPromise()
        .then(response => response.json() as Libro[])
        .catch(this.handleError);

    getLibro = (id: number): Promise<Libro> => this.http.get(`${this.librosUrl}/${id}`)
        .toPromise()
        .then(response => response.json() as Libro)
        .catch(this.handleError);


    save = (libro: Libro): Promise<Libro> => libro.idLibro ? this.put(libro) : this.post(libro);

    search = (term: string): Observable<Libro[]> => this.http
            .get(`${this.librosUrl}?nombre=${term}`)
            .map((r: Response) => r.json() as Libro[]);

    private handleError(error: any): Promise<any> {
        console.error('Un error ha ocurrido', error);
        return Promise.reject(error.message || error);
    }

    // Add new Libro
    private post(libro: Libro): Promise<Libro> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.librosUrl, JSON.stringify(libro), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Libro
    private put(libro: Libro): Promise<Libro> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.librosUrl}/${libro.idLibro}`;

        return this.http
            .put(url, JSON.stringify(libro), { headers: headers })
            .toPromise()
            .then(() => libro)
            .catch(this.handleError);
    }

}
