import { DicionarioModificadores } from "../dicionario/dicionario-modificadores";

export class SeletorModificador {
    constructor(nomeFolEs: string) {
        if (
            DicionarioModificadores[nomeFolEs] === undefined || 
            DicionarioModificadores[nomeFolEs] === null
        ) {
            throw new Error(`O seletor \'${nomeFolEs}\' não foi encontrado.`);
        }
        return new DicionarioModificadores[nomeFolEs];
    }
}
