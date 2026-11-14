import { Pseudoclasse } from "../pseudoclasses/pseudoclasse";
import { PragmasSeletor } from "./pragmas-seletor";

export abstract class Seletor {
    pseudoclasse?: Pseudoclasse;
    pragmas?: PragmasSeletor;
    pragmasTraducao?: PragmasSeletor;
    /**
     * Verdadeiro quando este seletor inicia um novo item de uma lista de
     * seletores, isto é, quando é precedido por vírgula (ex.: `b` em `a, b`).
     * Seletores consecutivos sem vírgula formam um seletor descendente (ex.: `a b`).
     */
    separadoPorVirgula?: boolean;

    constructor(pseudoclasse?: Pseudoclasse, pragmas?: PragmasSeletor) {
        this.pseudoclasse = pseudoclasse;
        this.pragmas = pragmas;
    }

    abstract paraTexto();
}
