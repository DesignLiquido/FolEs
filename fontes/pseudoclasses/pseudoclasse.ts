export interface PragmasPseudoclasse {
    linha: number;
    colunaInicial: number;
    colunaFinal: number;
}

export class Pseudoclasse {
    nomeFoles: string | string[];
    pseudoclasseCss: string;
    pragmas?: PragmasPseudoclasse;

    constructor(nomeFoles: string | string[], pseudoclasseCss: string, pragmas?: PragmasPseudoclasse) {
        this.nomeFoles = nomeFoles;
        this.pseudoclasseCss = pseudoclasseCss;
        this.pragmas = pragmas;
    }
}
