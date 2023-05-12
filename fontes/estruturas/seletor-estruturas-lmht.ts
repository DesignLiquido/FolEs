import { PragmasSeletor } from "../seletores";
import { DicionarioEstruturasLmht } from "./dicionario-estruturas-lmht";

export class SeletorEstruturasLmht {
    constructor(nomeFolEs: string, pragmas?: PragmasSeletor) {
        const estrutura = DicionarioEstruturasLmht[nomeFolEs];
        if (estrutura === undefined || estrutura === null) {
            throw new Error(`A estrutura \'${nomeFolEs}\' não existe.`);
        }

        return new estrutura(pragmas);
    }
}
