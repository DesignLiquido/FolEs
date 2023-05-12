import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class DirecaoTexto extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("direção-do-texto", "dir", pragmas);
    }
}
