import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class LerEscrever extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("ler-escrever", "read-write", pragmas);
    }
}
