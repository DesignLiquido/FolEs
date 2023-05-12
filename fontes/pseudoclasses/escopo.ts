import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Escopo extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("escopo", "scope", pragmas);
    }
}