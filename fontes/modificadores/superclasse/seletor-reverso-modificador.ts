import { Valor } from "../../valores/valor";
import { DicionarioReversoModificadores } from "../dicionario/dicionario-reverso-modificadores";
import { PragmasModificador } from "./pragmas-modificador";

export class SeletorReversoModificador {
    constructor(nomeCss: string, valor: string | Valor, quantificador: string, pragmas?: PragmasModificador) {
        if (
            DicionarioReversoModificadores[nomeCss] === undefined || 
            DicionarioReversoModificadores[nomeCss] === null
        ) {
            throw new Error(`O seletor \'${nomeCss}\' não foi encontrado.`);
        }
        return new DicionarioReversoModificadores[nomeCss](valor, quantificador, pragmas);
    }
}
