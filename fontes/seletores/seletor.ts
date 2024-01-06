import { Pseudoclasse } from "../pseudoclasses/pseudoclasse";
import { PragmasSeletor } from "./pragmas-seletor";

export abstract class Seletor {
    pseudoclasse?: Pseudoclasse;
    pragmas?: PragmasSeletor;
    pragmasTraducao?: PragmasSeletor;

    constructor(pseudoclasse?: Pseudoclasse, pragmas?: PragmasSeletor) {
        this.pseudoclasse = pseudoclasse;
        this.pragmas = pragmas;
    }

    abstract paraTexto();
}
