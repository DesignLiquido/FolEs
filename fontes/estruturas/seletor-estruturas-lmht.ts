import { PragmasSeletor } from "../seletores";
import { DicionarioEstruturasLmht } from "./dicionario-estruturas-lmht";
import { Estrutura } from "./estrutura";

export class SeletorEstruturasLmht {
    constructor(nomeFolEs: string, pragmas?: PragmasSeletor) {
        const estrutura: typeof Estrutura = DicionarioEstruturasLmht[nomeFolEs];
        if (estrutura === undefined || estrutura === null) {
            throw new Error(`A estrutura \'${nomeFolEs}\' não existe.`);
        }

        return new estrutura(pragmas);
    }
}
