import { PragmasSeletor } from "../seletores/seletor";
import { DicionarioEstruturasHtml } from "./dicionario-estruturas-html";

export class SeletorEstruturasHtml {
    constructor(nomeCss: string, pragmas?: PragmasSeletor) {
        const estrutura = DicionarioEstruturasHtml[nomeCss];
        if (estrutura === undefined || estrutura === null) {
            throw new Error(`A estrutura \'${nomeCss}\' não existe.`);
        }

        return new estrutura(pragmas);
    }
}
