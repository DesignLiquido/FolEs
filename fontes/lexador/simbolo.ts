export class Simbolo {
    lexema: string;
    tipo: string;
    literal: any;
    linha: number;
    colunaInicial: number;
    colunaFinal: number;

    constructor(
        tipo: string, 
        lexema: string, 
        literal: any, 
        linha: number, 
        colunaInicial: number, 
        colunaFinal: number
    ) {
        this.tipo = tipo;
        this.lexema = lexema;
        this.literal = literal;
        this.linha = linha;
        this.colunaInicial = colunaInicial;
        this.colunaFinal = colunaFinal;
    }

    paraTexto(): string {
        return this.tipo + " " + this.lexema + " " + this.literal;
    }
}