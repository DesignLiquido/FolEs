import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class UltimoTipo extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("ultimo-tipo", "last-of-type", pragmas);
    }
}
