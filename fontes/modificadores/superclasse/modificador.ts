export interface PragmasModificador {
    colunaInicial: number;
    colunaFinal: number;
}

export class Modificador {
    nomeFoles: string | string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    pragmas?: PragmasModificador;

    constructor(nomeFoles: string | string[], propriedadeCss: string, pragmas?: PragmasModificador) {
        this.nomeFoles = nomeFoles;
        this.propriedadeCss = propriedadeCss;
        this.pragmas = pragmas;
    }
}