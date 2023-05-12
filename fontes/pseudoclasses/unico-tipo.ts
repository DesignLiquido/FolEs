import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class UnicoTipo extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("unico-tipo", "only-of-type", pragmas);
    }
}
