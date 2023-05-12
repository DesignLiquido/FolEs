import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class IdiomaGlobal extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("idioma-global", "lang", pragmas);
    }
}
