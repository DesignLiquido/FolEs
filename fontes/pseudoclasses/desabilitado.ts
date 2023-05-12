import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Desabilitado extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("desabilitado", "disabled", pragmas);
    }
}