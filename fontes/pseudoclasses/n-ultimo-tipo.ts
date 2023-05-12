import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class NUltimoTipo extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("n-ultimo-tipo", "nth-of-type", pragmas);
    }
}
