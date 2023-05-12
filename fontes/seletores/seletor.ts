import { Pseudoclasse } from "../pseudoclasses/pseudoclasse";

export abstract class Seletor {
    pseudoclasse?: Pseudoclasse;

    constructor(pseudoclasse?: Pseudoclasse) {
        this.pseudoclasse = pseudoclasse;
    }

    abstract paraTexto();
}