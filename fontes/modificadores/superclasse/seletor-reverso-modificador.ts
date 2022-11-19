import { DicionarioReversoModificadores } from "../dicionario/dicionario-reverso-modificadores";

export class SeletorReversoModificador {
    constructor(nomeCss: string, valor: string, quantificador: string) {
        if (
            DicionarioReversoModificadores[nomeCss] === undefined || 
            DicionarioReversoModificadores[nomeCss] === null
        ) {
            throw new Error(`O seletor \'${nomeCss}\' não foi encontrado.`);
        }
        return new DicionarioReversoModificadores[nomeCss](valor, quantificador);
    }
}
