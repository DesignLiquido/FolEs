import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class EstiloAlvo extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("estilo-alvo", "target", pragmas);
    }
}