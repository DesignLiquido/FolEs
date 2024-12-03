import { DicionarioReversoModificadores } from "../modificadores/dicionario/dicionario-reverso-modificadores";

export class SeletorValorReverso {
    constructor(nomeCss: string, valores: any[]) {
        const modificador = DicionarioReversoModificadores[nomeCss];
        if (
            modificador === undefined || 
            modificador === null
        ) {
            throw new Error(`O valor \'${nomeCss}\' não foi encontrado.`);
        }
        return new modificador(...valores);
    }
}