import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class NTipo extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("n-tipo", "nth-of-type", pragmas);
    }
}
