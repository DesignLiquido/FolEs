import { DicionarioModificadores } from "../dicionario/dicionario-modificadores";
import { PragmasModificador } from "../../modificadores/superclasse";

export class SeletorModificador {
    constructor(nomeFolEs: string, valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        if (
            DicionarioModificadores[nomeFolEs] === undefined || 
            DicionarioModificadores[nomeFolEs] === null
        ) {
            throw new Error(`O seletor \'${nomeFolEs}\' não foi encontrado.`);
        }
        return new DicionarioModificadores[nomeFolEs](valor, quantificador);
    }
}
