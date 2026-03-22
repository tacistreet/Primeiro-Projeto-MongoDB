export class Livro {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor( 
        _id: string | null = null,
        codEditora: number = 0,
        titulo: string = '',
        resumo: string = '',
        autores: string[] = []
    ) {
        this._id = _id;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
     }
}
