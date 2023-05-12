import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class PrimeiroTipo extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("primeiro-tipo", "first-of-type", pragmas);
    }
}
