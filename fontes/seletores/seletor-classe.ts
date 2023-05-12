import { PragmasSeletor } from "./pragmas-seletor";
import { Seletor } from "./seletor";

export class SeletorClasse extends Seletor {
    nomeClasse: string;
    pragmas?: PragmasSeletor;

    constructor(nomeClasse: string, pragmas?: PragmasSeletor) {
        super();
        this.nomeClasse = nomeClasse;
        this.pragmas = pragmas;
    }

    paraTexto() {
        return `.${this.nomeClasse}`;
    }
}