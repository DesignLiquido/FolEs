import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Verificado extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("verificado", "checked", pragmas);
    }
}
