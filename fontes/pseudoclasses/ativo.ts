import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Ativo extends Pseudoclasse {
    constructor(pragmas?: PragmasPseudoclasse) {
        super("ativo", "active", pragmas);
    }
}