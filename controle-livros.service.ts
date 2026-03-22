import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ControleLivrosService {
    baseUrl = 'http://localhost:3030/livros';

    constructor(private http: HttpClient) { }

    obterLivros(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    incluir(livro: any): Observable<any> {
        return this.http.post(this.baseUrl, livro);
    }

    excluir(codigo: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${codigo}`);
    }
}
