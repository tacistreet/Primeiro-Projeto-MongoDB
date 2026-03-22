import { Injectable } from '@angular/core';

export interface Editora {
    codEditora: number;
    nome: string;
}
@Injectable({
    providedIn: 'root'
})
export class ControleEditoraService {
    editoras: Editora[] = [
        { codEditora: 1, nome: 'Editora Alta Books' },
        { codEditora: 2, nome: 'Editora Pearson' },
        { codEditora: 3, nome: 'Editora Addison Wesley' }
    ];

    getEditoras(): Editora[] {
        return this.editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editora = this.editoras.filter(e => e.codEditora === codEditora);
        return editora.length > 0 ? editora[0].nome : undefined;
    }
}
