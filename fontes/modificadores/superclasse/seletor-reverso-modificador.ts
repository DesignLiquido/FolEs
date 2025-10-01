import { Valor } from "../../valores/valor";
import { DicionarioReversoModificadores } from "../dicionario/dicionario-reverso-modificadores";
import { PragmasModificador } from "./pragmas-modificador";

export class SeletorReversoModificador {
    constructor(
        nomeCss: string,
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel: boolean = false,
    ) {
        if (
            DicionarioReversoModificadores[nomeCss] === undefined ||
            DicionarioReversoModificadores[nomeCss] === null
        ) {
            throw new Error(`O seletor \'${nomeCss}\' não foi encontrado.`);
        }

        return new DicionarioReversoModificadores[nomeCss](valores, pragmas, variavel);
    }
}
