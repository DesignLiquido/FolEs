export interface PragmasPseudoclasse {
    linha: number;
    colunaInicial: number;
    colunaFinal: number;
}

export class Pseudoclasse {
    nomeFoles: string | string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    pragmas?: PragmasPseudoclasse;

    constructor(nomeFoles: string | string[], propriedadeCss: string, pragmas?: PragmasPseudoclasse) {
        this.nomeFoles = nomeFoles;
        this.propriedadeCss = propriedadeCss;
        this.pragmas = pragmas;
    }
}
